import { Pool } from 'pg';

let connection = new Promise((resolve, reject) => {
    try {
        resolve(new Pool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB,
            max: 20,
            password: process.env.DB_PASSWORD
        }));
    } catch (e) {
        reject(e);
    }
}).then(psql => {
    return psql.connect();
});

export async function getPsql() {
    let psql = await connection;
    return psql;
}
