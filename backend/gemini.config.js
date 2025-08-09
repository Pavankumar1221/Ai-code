const {
    GoogleGenerativeAI
  } = require("@google/generative-ai");
  
const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

module.exports = {
    GeminiModel:model
}