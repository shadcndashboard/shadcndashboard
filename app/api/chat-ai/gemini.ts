import { GoogleGenerativeAI } from "@google/generative-ai";

export async function sendMessageToGemini(
  userMessage: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return "Gemini API Error: GEMINI_API_KEY is not defined in .env.local";
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  try {
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return `Gemini API Error: ${error?.message || "Unknown error"}`;
  }
}
