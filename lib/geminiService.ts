import { GoogleGenAI } from "@google/genai";
import { Message } from "@/types";

export const getGeminiResponse = async (
  messages: Message[],
  systemInstruction: string
): Promise<string> => {
  const apiKey = process.env.GEMINI_API_KEY || "";
  
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set in environment variables");
    return "I'm sorry, the AI service is not properly configured. Please contact the administrator.";
  }
  
  const ai = new GoogleGenAI({ apiKey });
  
  const contents = messages.map(m => ({
    role: m.role,
    parts: m.parts
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
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
    if (process.env.NODE_ENV === 'development') {
      console.error("Gemini API Error:", error);
    }
    return "I encountered a spiritual block while thinking. This might be due to a connection issue. Let's try rephrasing your request!";
  }
};
