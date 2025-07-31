import { GoogleGenerativeAI } from '@google/generative-ai';

interface QuestionRequest {
    level: string;
    dataStructure?: string;
    algorithm?: string;
    technique?: string;
    concept?: string;
}

interface QuestionResponse {
    question: string;
    answer: string;
    title: string;
    description: string;
}

interface APIResponse {
    success: boolean;
    response: QuestionResponse | null;
    error: string | null;
}

const SYSTEM_INSTRUCTION = {
    role: 'system',
    parts: [{
        text: `
You are a Python coding question generator. Your ONLY job is to generate coding questions and answers in Python.

CRITICAL RULES:
1. You MUST respond ONLY with valid JSON in this exact format:
{
    "question": "The coding problem statement here. its want to have a examples for user can understand the problem.(example is not a code. you want to explain the question with that example.)",
    "answer": "Complete Python solution with comments explaining the approach",
    "title": "Brief descriptive title for the problem",
    "description": "Short explanation of what the problem tests and key concepts"
}

2. ALL solutions must be in Python only
3. NO additional text, explanations, or formatting outside the JSON
4. The "answer" field must contain complete, runnable Python code
5. Include time and space complexity in comments within the answer
6. Test the logic mentally before providing the solution

QUESTION GENERATION GUIDELINES:
- For "easy": Basic loops, conditionals, simple data structures
- For "medium": Multiple data structures, algorithms, moderate complexity
- For "hard": Advanced algorithms, complex logic, optimization required

DATA STRUCTURES: Focus on arrays, lists, dictionaries, sets, stacks, queues, trees, graphs
ALGORITHMS: Sorting, searching, dynamic programming, recursion, greedy, etc.
TECHNIQUES: Two pointers, sliding window, binary search, BFS/DFS, etc.

Remember: Output ONLY the JSON object, nothing else!
        `
    }]
};

const api_key = process.env.NEXT_GEMINI_KEY;

if (!api_key) {
    throw new Error('NEXT_GEMINI_KEY environment variable is not set');
}

const genAI = new GoogleGenerativeAI(api_key);

export async function handleAIChat(userMessage: QuestionRequest): Promise<APIResponse> {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            generationConfig: {
                maxOutputTokens: 2000,
                temperature: 0.3, // Lower temperature for more consistent output
                topP: 0.8,
                topK: 40,
            },
            safetySettings: [
                { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
                { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
                { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
                { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
            ],
            systemInstruction: SYSTEM_INSTRUCTION
        });

        // Format the user message to be more specific
        const formattedMessage = formatUserMessage(userMessage);

        const result = await model.generateContent(formattedMessage);
        const response = result.response;
        let text = response.text().trim();

        // Clean up the response - remove any markdown formatting
        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        // Validate and parse JSON
        let parsedResponse: QuestionResponse;
        try {
            parsedResponse = JSON.parse(text);
        } catch (parseError) {
            throw new Error(`Invalid JSON response: ${text}`);
        }

        // Validate required fields
        if (!parsedResponse.question || !parsedResponse.answer ||
            !parsedResponse.title || !parsedResponse.description) {
            throw new Error('Missing required fields in AI response');
        }

        return {
            success: true,
            response: parsedResponse,
            error: null
        };

    } catch (error: any) {
        console.error('AI Chat Error:', error);
        throw Error(error);
    }
}

function formatUserMessage(userMessage: QuestionRequest): string {
    const parts = [];

    parts.push(`Generate a Python coding question with these specifications:`);
    parts.push(`- Difficulty Level: ${userMessage.level}`);

    if (userMessage.dataStructure) {
        parts.push(`- Data Structure Focus: ${userMessage.dataStructure}`);
    }

    if (userMessage.algorithm) {
        parts.push(`- Algorithm Type: ${userMessage.algorithm}`);
    }

    if (userMessage.technique) {
        parts.push(`- Technique to Use: ${userMessage.technique}`);
    }

    if (userMessage.concept) {
        parts.push(`- Concept Focus: ${userMessage.concept}`);
    }

    parts.push(`\nProvide response in the exact JSON format specified in the system instructions.`);

    return parts.join('\n');
}

// Usage example:
export async function generateCodingQuestion(params: QuestionRequest): Promise<QuestionResponse | null> {
    const result = await handleAIChat(params);

    if (result.success && result.response) {
        return result.response;
    } else {
        console.error('Failed to generate question:', result.error);
        return null;
    }
}