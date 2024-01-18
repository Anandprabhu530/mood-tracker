import { ChatGoogleGenerativeAI } from "@langchain/google-genai"

export const analyze_data = async (input) => {
    const model = new ChatGoogleGenerativeAI({ modelName: "gemini-pro", maxOutputTokens: 2048 })
    const answer = await model.invoke(input);
    console.log(answer);
} 