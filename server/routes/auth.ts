import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../model/User';  // Ajustez le chemin si nécessaire
import { Op } from 'sequelize';

const router = express.Router();  // Utilisez express.Router() au lieu de Router()

// Register route
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, birthDate, gender, email, username, password } = req.body;

    // Vérifiez si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { [Op.or]: [{ email }, { username }] } });
    if (existingUser) {
      return res.status(400).send({ message: 'User already exists' });
    }

    // Hachez le mot de passe
    const hashedPassword = await bcrypt.hash(password, 20);

    // Créez un nouvel utilisateur
    const user = await User.create({
      firstName,
      lastName,
      birthDate,
      gender,
      email,
      username,
      password: hashedPassword
    });

    res.status(201).send({ message: 'User registered successfully', user });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Login route
router.post('/login', async (req: Request, res: Response) => {
  const { login, password } = req.body;

  try {
    // Cherchez l'utilisateur par email ou pseudo
    let user = await User.findOne({
      where: {
        [Op.or]: [{ email: login }, { username: login }]
      }
    });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.send('User logged in successfully');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send('Server error');
    } else {
      console.error('Unexpected error', err);
      res.status(500).send('Unexpected server error');
    }
  }
});

export default router;
