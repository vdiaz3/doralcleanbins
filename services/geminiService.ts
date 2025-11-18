import { GoogleGenAI } from "@google/genai";
import { VEO_MODEL } from "../types";

// Helper to manage the API key selection flow required for Veo
export const checkApiKey = async (): Promise<boolean> => {
  if (window.aistudio && window.aistudio.hasSelectedApiKey) {
    return await window.aistudio.hasSelectedApiKey();
  }
  return false; // Fallback if window.aistudio is not available (local dev) or not selected
};

export const requestApiKey = async (): Promise<void> => {
  if (window.aistudio && window.aistudio.openSelectKey) {
    await window.aistudio.openSelectKey();
  } else {
    console.warn("AI Studio overlay not found.");
  }
};

export const generateCleaningDemo = async (prompt: string): Promise<string> => {
  // Ensure we get the fresh key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    let operation = await ai.models.generateVideos({
      model: VEO_MODEL,
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9' 
      }
    });

    // Polling loop
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5 seconds
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) {
      throw new Error("No generated video URI found.");
    }

    // The response requires appending the API key to fetch the actual binary
    return `${videoUri}&key=${process.env.API_KEY}`;

  } catch (error: any) {
    console.error("Error generating video:", error);
    // Handle specific "Requested entity was not found" which implies key issues
    if (error.message && error.message.includes("Requested entity was not found")) {
       // Reset logic could trigger here, but we'll throw to let UI handle it
       throw new Error("API Key invalid or expired. Please re-select.");
    }
    throw error;
  }
};