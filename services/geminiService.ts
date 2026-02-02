
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export const getGeminiResponse = async (
  messages: Message[],
  systemInstruction: string
): Promise<string> => {
  // Use import.meta.env for Vite or process.env for standard Node environments
  const apiKey = (import.meta as any).env?.VITE_API_KEY || process.env.API_KEY || "";
  const ai = new GoogleGenAI({ apiKey });
  
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

    if (!response || !response.text) {
      return "I'm sorry, I couldn't process that request at the moment.";
    }

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a spiritual block while thinking. Let's try rephrasing your request!";
  }
};
