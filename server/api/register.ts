import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { firstName, lastName, birthDate, gender, email, username, password } = body;

  try {
    console.log('Connecting to the database...');
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'untamedcats',
      port: 3306,
      password: 'Clem13022003',
    });

    console.log('Connected to the database. Checking if email exists...');
    const [existingUser] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      console.log('Email already exists.');
      return { success: false, message: 'Email already exists' };
    }

    console.log('Email does not exist. Hashing password...');
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('Password hashed. Inserting new user...');
    const [result] = await connection.execute(
      'INSERT INTO users (firstName, lastName, birthDate, gender, email, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, birthDate, gender, email, username, hashedPassword]
    );

    console.log('New user inserted. Retrieving inserted user...');
    const [newUser] = await connection.execute('SELECT * FROM users WHERE id = ?', [result.insertId]);

    console.log('User registration successful.');
    return { success: true, message: 'Registration successful', user: newUser[0] };
  } catch (err) {
    console.error('Error:', err.message);
    return { success: false, message: err.message };
  }
});
