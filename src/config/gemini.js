import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // Replace 'YOUR_API_KEY_HERE' with your actual API key
  const apiKey = "AIzaSyAAPPl3yWQ0ICnAD2tamffkqL07kAa7srA";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(promt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(promt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
 export default run;


