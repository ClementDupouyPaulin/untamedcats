import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id')
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'untamedcats',
            // port: 3306,
            // password: '',
        })

        const categoryQuery = 'SELECT * FROM `categories` WHERE `id`=' + id + ';'
        const [category, categoryFields] = await connection.query(categoryQuery)

        const messagesQuery = 'SELECT * FROM `messages` WHERE `parent_id` IS NULL AND `category_id`=' + id + ';'
        const [messages, messagesFields] = await connection.query(messagesQuery)

        return {category, messages}
    } catch (err) {
        return {error: err}
    }
})