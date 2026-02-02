
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export const getGeminiResponse = async (
  messages: Message[],
  systemInstruction: string
): Promise<string> => {
  // Always use a named parameter and obtain the API key exclusively from process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Format history for the API - we skip the system instruction here as it goes in config
  const contents = messages.map(m => ({
    role: m.role,
    parts: m.parts
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    // The text property returns the string output directly; do not call it as a method.
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
