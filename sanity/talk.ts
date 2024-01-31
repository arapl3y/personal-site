import { Talk } from "@/types/talk";
import { client } from "./client";

export async function getTalks() {
  const query = `
    *[_type == "talk"]|order(orderRank){
      _id,
      _createdAt,
      name,
      url,
      year,
      description
    }
  `;

  return await client.fetch<Talk[]>(query);
}
