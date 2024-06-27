import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  try {
    console.log('Connecting to the database...');
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'untamedcats',
      port: 3306,
      password: 'Clem13022003',
    });

    console.log('Connected to the database. Executing query...');
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      console.log('User not found.');
      return { success: false, message: 'User not found' };
    }

    const user = rows[0];
    console.log('User found. Comparing passwords...');

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Invalid password.');
      return { success: false, message: 'Invalid password' };
    }

    console.log('Password match. Login successful.');
    return { success: true, message: 'Login successful', user: { id: user.id, email: user.email, username: user.username, firstName: user.firstName, lastName: user.lastName, birthDate: user.birthDate } };
  } catch (err) {
    console.error('Error:', err.message);
    return { success: false, message: err.message };
  }
});
