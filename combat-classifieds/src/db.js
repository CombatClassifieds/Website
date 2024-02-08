import { Pool } from 'pg';

export async function getPsql() {
    const psql = new Pool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB,
        max: 20,
        password: process.env.DB_PASSWORD
    });

    await psql.connect();

    return psql;
}
