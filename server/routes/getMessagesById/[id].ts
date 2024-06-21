import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id')
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'untamedcats',
            port: 3306,
            password: 'Clem13022003',
        })

        const messagesQuery = 'SELECT * FROM `messages` WHERE `id`=' + id + ' OR `parent_id`=' + id + ';'
        const [messages, messagesFields] = await connection.query(messagesQuery)

        return {messages}
    } catch (err) {
        return {error: err}
    }
})