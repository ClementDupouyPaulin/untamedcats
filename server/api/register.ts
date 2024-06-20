export default defineEventHandler((event) => {
    return { hello: event }

    // try {
    //     console.log('register route')
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
})