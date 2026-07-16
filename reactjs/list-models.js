import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

async function list() {
  try {
    const listModels = await genAI.listModels();
    console.log("Available Models:");
    for (const model of listModels.models) {
      console.log(`- ${model.name}`);
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

list();
