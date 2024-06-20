import express from 'express';
import sequelize from './db/db';
import User from './model/User';
import authRouter from './routes/auth';

const app = express();
const port = 5000;

app.use(express.json());
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(() => {
  return sequelize.sync({ force: true });
}).then(() => {
  return sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
}).then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
  process.exit(1);  // Arrêtez le serveur si la synchronisation échoue
});
