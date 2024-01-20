import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { StructuredOutputParser } from "langchain/output_parsers";
import { ChatPromptTemplate } from "langchain/prompts";
import { z } from "zod"

const parser = StructuredOutputParser.fromZodSchema(
    z.object({
        mood: z.string().describe("what is the mood of the data"),
        summary: z.string().describe("What is the summary of the input"),
        Sentiment: z.string().describe("What is the sentiment of the input"),
        Negativity: z.boolean().describe("Negative or not"),
    })
);

export const analyze_data = async (input) => {
    const model = new ChatGoogleGenerativeAI({ modelName: "gemini-pro", maxOutputTokens: 2048 })
    const prompt = ChatPromptTemplate.fromMessages([["system", "You are a mood analyzer. Analyze and say the output."],
    ["user", "{input}"],])
    const chain = prompt.pipe(model)
    const answer = await chain.invoke({
        question: "What is the capital of France?",
        format_instructions: parser.getFormatInstructions(),
    });
    console.log(answer);
} 