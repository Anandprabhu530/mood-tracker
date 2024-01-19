import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod"

const parser = StructuredOutputParser.fromZodSchema(
    z.object({
        answer: z.string().describe("answer to the user's question"),
        sources: z
            .array(z.string())
            .describe("sources used to answer the question, should be websites."),
    })
);

export const analyze_data = async (input) => {
    const model = new ChatGoogleGenerativeAI({ modelName: "gemini-pro", maxOutputTokens: 2048 })
    const answer = await model.invoke(input);
} 