import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

const REVALIDATION_TOKEN = process.env.REVALIDATION_TOKEN ?? "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
  const isValid = await isValidSignature(
    JSON.stringify(req.body),
    signature,
    REVALIDATION_TOKEN
  );

  if (!isValid) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  try {
    const paths = [`projects/${req.body.slug.current}`, "/"];

    for (const path of paths) {
      await res.revalidate(path);
    }

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error while revalidating");
  }
}
