import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'untamedcats',
            port: 3306,
            password: 'Clem13022003',
        })

        const messagesQuery = 'SELECT * FROM `messages` LIMIT 5;'
        const [messages, messagesFields] = await connection.query(messagesQuery)

        return {messages}
    } catch (err) {
        return {error: err}
    }
})