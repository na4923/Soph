import express from 'express';
import userRoutes from './routes/users.js';
import factRoutes from './routes/facts.js';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/facts', factRoutes);

app.listen(port, () => {
  console.log(`Soph's backend is running at http://localhost:${port}`);
});