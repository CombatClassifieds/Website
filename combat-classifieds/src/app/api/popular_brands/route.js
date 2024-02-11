import { getPsql } from '../../../db';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    let psql = await getPsql();
    let results = await psql.query('SELECT * FROM popular_brands', []);
    return new Response(JSON.stringify(results.rows), { contentType: 'application/json' });
}
