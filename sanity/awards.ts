import { Award } from "@/types/award";
import { client } from "./client";

export async function getAwards() {
  const query = `
    *[_type == "award"]|order(orderRank){
      _id,
      _createdAt,
      name,
      url,
      year,
      description
    }
  `;

  return await client.fetch<Award[]>(query);
}
