import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

// Version 1 Routes

// User Routes

// Fact Routes

app.listen(port, () => {
  console.log(`Soph's backend is running at http://localhost:${port}`);
});