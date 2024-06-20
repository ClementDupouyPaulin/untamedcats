// import { Router, Request, Response } from 'express';
// import bcrypt from 'bcryptjs';
// import User from './model/User';  // Ajustez le chemin si nécessaire

// const router = Router();

// // Register route
// router.post('/register', async (req: Request, res: Response) => {
//   try {
//     const { firstName, lastName, birthDate, gender, email, password } = req.body;

//     // Vérifiez si l'utilisateur existe déjà
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).send({ message: 'User already exists' });
//     }

//     // Hachez le mot de passe
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Créez un nouvel utilisateur
//     const user = await User.create({
//       firstName,
//       lastName,
//       birthDate,
//       gender,
//       email,
//       password: hashedPassword
//     });

//     res.status(201).send({ message: 'User registered successfully', user });
//   } catch (err) {
//     console.error('Error registering user:', err);
//     res.status(500).send({ message: 'Internal server error' });
//   }
// });

// // Login route
// router.post('/login', async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ where: { email } });

//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     res.send('User logged in successfully');
//   } catch (err) {
//     if (err instanceof Error) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     } else {
//       console.error('Unexpected error', err);
//       res.status(500).send('Unexpected server error');
//     }
//   }
// });

// export default router;
