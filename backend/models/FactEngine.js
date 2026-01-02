import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function generateFact() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "TODO",
  });
  console.log("Received fact: " + response.text);
  return response.text;
}