import mysql from 'mysql2/promise';
export default defineEventHandler(async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'untamedcats',
            port: 3306,
            password: 'Clem13022003',
        })

        const sql = 'SELECT * FROM `categories`'

        const [rows, fields] = await connection.query(sql);
        return {categories: rows}
    } catch (err) {
        return {error: err}
    }
})