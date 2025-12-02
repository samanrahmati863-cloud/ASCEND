
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the Lead Consultant for ASCEND, a luxury AI visual agency based in Iran but operating globally.
      
      Agency Vibe: High-fashion, futuristic, cinematic, 'Chrome Hearts' aesthetic, liquid glass visuals.
      Mission: Elevate local fashion brands to look global and untouchable through AI campaign visuals.
      
      Services:
      1. Editorial (Visuals Only) - Social media content, mood boarding.
      2. Campaign (Launch) - Full video/image suite for new collection drops.
      3. Brand Identity (Full Suite) - Total visual overhaul, storytelling, viral strategy.
      
      Tone: Professional yet edgy, concise, high-fashion. Use minimal emojis (💎, 🌑, 🔗).
      Goal: Convince fashion brands they need AI visuals to go viral.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Connection to ASCEND Mainframe failed. (Missing API Key)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "No signal.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Network unreachable. Please try again.";
  }
};
