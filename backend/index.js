import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.get('/api/fact', async (req, res) => {
  const { feedback } = req.body;

  try {
    const prompt = buildPrompt(feedback);
    const response = await openai.chat.completions.create({
      model: "gpt-5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
    });

    const fact = response.choices[0].message.content;
    res.json({ fact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch fact from OpenAI.' });
  }
});

function addFeedback(existingFeedback, newFeedback) {
  //TODO
}

function buildPrompt(feedback) {
  return `Explain an interesting fact or concept. Avoid buzzwords, 
  and make it engaging and easy to read. Respond only with the explanation, 
  keep it under 250 words, begin with a short title, and heed the following 
  feedback (If any): ${feedback}`;
}

app.listen(port, () => {
  console.log(`Soph's backend is running at http://localhost:${port}`);
});