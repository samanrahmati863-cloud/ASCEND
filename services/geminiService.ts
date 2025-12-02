
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Mock service to replace Gemini API
// This allows the site to function statically on GitHub Pages without an API Key.

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lowerMsg = message.toLowerCase();

  // Simple rule-based responses for the static demo
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return "Greetings. Welcome to ASCEND. How can we elevate your brand aesthetic today?";
  }

  if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('package')) {
    return "We offer three tiers: Basic (19.8M IRT), Standard (48M IRT), and Advanced (95M IRT). Please scroll to the Services section for full details.";
  }

  if (lowerMsg.includes('work') || lowerMsg.includes('portfolio') || lowerMsg.includes('example')) {
    return "Our Work section showcases our latest AI-driven campaigns, featuring void aesthetics and liquid silk simulations.";
  }

  if (lowerMsg.includes('contact') || lowerMsg.includes('book') || lowerMsg.includes('reserve')) {
    return "You can reserve a package directly via the buttons in the Services section, or email us at hello@ascend.agency.";
  }

  return "I am currently operating in static demo mode. For detailed strategy and booking, please use the WhatsApp links in our Services section.";
};
