import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

const REVALIDATION_TOKEN = process.env.REVALIDATION_TOKEN ?? "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
  const isValid = await isValidSignature(
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
    // Only revalidate root route for now
    const pathToRevalidate = "/";

    console.log(`===== Revalidating: ${pathToRevalidate}`);

    await res.revalidate(pathToRevalidate);

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error while revalidating");
  }
}
