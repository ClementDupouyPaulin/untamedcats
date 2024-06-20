import express from 'express';
import sequelize from './db'; // Assurez-vous que ce module exporte correctement l'instance Sequelize
import User from './model/User'; // Assurez-vous que ce modèle est correctement défini
import authRouter from './auth'; // Assurez-vous que ce fichier exporte correctement le routeur
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.json());
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.send('Hello World!');
});

sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
  process.exit(1); // Arrêtez le serveur si la synchronisation échoue
});
