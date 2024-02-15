import { getPsql } from "../../../../db";

export const dynamic = "force-dynamic";

export async function GET(request, { params: { id } }) {
  let psql = await getPsql();
  let results = await psql.query(
    "SELECT img, id FROM items WHERE id <> $1 LIMIT 5 OFFSET $1",
    [id]
  );
  return new Response(JSON.stringify(results.rows), {
    contentType: "application/json",
  });
}
