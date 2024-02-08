import { getPsql } from '../../../db';

export const dynamic = 'force-dynamic';
export async function GET(request) {
    let psql = await getPsql();
    let results = await psql.query('SELECT * FROM popular_brands', []);
    // let HOST = process.env.NEXT_HOST;
    // console.log(`Host: ${HOST}`);
    // return new Response(HOST);
    return new Response(JSON.stringify(results.rows), { contentType: 'application/json' });
}
