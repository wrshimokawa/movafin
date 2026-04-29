'use server';
/**
 * @fileOverview An AI agent that suggests transaction categories based on description and amount.
 *
 * - aiSuggestedTransactionCategories - A function that handles the category suggestion process.
 * - AiSuggestedTransactionCategoriesInput - The input type for the aiSuggestedTransactionCategories function.
 * - AiSuggestedTransactionCategoriesOutput - The return type for the aiSuggestedTransactionCategories function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiSuggestedTransactionCategoriesInputSchema = z.object({
  description: z.string().describe('The transaction description.'),
  amount: z
    .number()
    .describe(
      'The transaction amount (can be positive for income or negative for expense).'
    ),
});
export type AiSuggestedTransactionCategoriesInput = z.infer<
  typeof AiSuggestedTransactionCategoriesInputSchema
>;

const AiSuggestedTransactionCategoriesOutputSchema = z.object({
  suggestedCategories: z
    .array(z.string())
    .max(3)
    .describe('A list of up to 3 suggested categories for the transaction.'),
});
export type AiSuggestedTransactionCategoriesOutput = z.infer<
  typeof AiSuggestedTransactionCategoriesOutputSchema
>;

export async function aiSuggestedTransactionCategories(
  input: AiSuggestedTransactionCategoriesInput
): Promise<AiSuggestedTransactionCategoriesOutput> {
  return aiSuggestedTransactionCategoriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestTransactionCategoriesPrompt',
  input: { schema: AiSuggestedTransactionCategoriesInputSchema },
  output: { schema: AiSuggestedTransactionCategoriesOutputSchema },
  prompt: `You are an expert financial assistant that helps categorize transactions.
Given the following transaction details, suggest up to 3 relevant categories.
Consider if the amount suggests an income (positive) or an expense (negative) and suggest categories accordingly.
Prioritize common and intuitive financial categories.

Transaction Description: {{{description}}}
Transaction Amount: {{{amount}}}

Please provide your suggestions as a JSON array of strings matching the output schema.`,
});

const aiSuggestedTransactionCategoriesFlow = ai.defineFlow(
  {
    name: 'aiSuggestedTransactionCategoriesFlow',
    inputSchema: AiSuggestedTransactionCategoriesInputSchema,
    outputSchema: AiSuggestedTransactionCategoriesOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
