import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askGemini(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);

    const message = error?.message || "";

    if (
      message.includes("RESOURCE_EXHAUSTED") ||
      message.includes("429") ||
      message.toLowerCase().includes("quota")
    ) {
      throw new Error(
        "⚠️ Free AI usage limit reached.\n\nThe AI has temporarily exhausted its free usage quota.\n\nYour chats are safe. Please try again later."
      );
    }

    if (
      message.includes("API_KEY") ||
      message.includes("API key") ||
      message.includes("401")
    ) {
      throw new Error(
        "⚠️ AI configuration error.\nPlease contact the administrator."
      );
    }

    if (
      message.includes("fetch") ||
      message.includes("network") ||
      message.includes("Failed to fetch")
    ) {
      throw new Error(
        "🔴 AI is currently offline.\nPlease check your internet connection."
      );
    }

    throw new Error(
      "⚠️ AI is temporarily unavailable.\nPlease try again in a few moments."
    );
  }
}