import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { z } from "zod"

const parser = StructuredOutputParser.fromZodSchema(
    z.object({
        mood: z
            .string()
            .describe('the mood of the person who wrote the journal entry.'),
        subject: z.string().describe('the subject of the journal entry.'),
        negative: z
            .boolean()
            .describe(
                'is the journal entry negative? (i.e. does it contain negative emotions?).'
            ),
        summary: z.string().describe('quick summary of the entire entry.'),
    })
);

export const analyze_data = async (input) => {
    const chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
            "Answer the users question as best as possible.\n{format_instructions}\n{question}"
        ),
        new ChatGoogleGenerativeAI({ modelName: "gemini-pro", maxOutputTokens: 2048 }),
        parser,
    ]);
    const response = await chain.invoke({
        question: input,
        format_instructions: parser.getFormatInstructions(),
    });
    return response
} 