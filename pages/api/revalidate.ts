import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

const REVALIDATION_TOKEN = process.env.REVALIDATION_TOKEN ?? "";

export default async function handler(req: any, res: any) {
  const signature = req.headers[SIGNATURE_HEADER_NAME];
  const isValid = isValidSignature(
    JSON.stringify(req.body),
    signature,
    REVALIDATION_TOKEN,
  );

  console.log(`==== is the webhook request valid? ${isValid}`);

  if (!isValid) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  try {
    const pathToRevalidate = req.body.slug.current || "/";

    console.log(`===== Revalidating: ${pathToRevalidate}`);

    await res.revalidate(pathToRevalidate);

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error while revalidating");
  }
}
