'use server';
/**
 * @fileOverview An AI agent that explains complex financial transaction descriptions.
 *
 * - aiTransactionExplainer - A function that handles the explanation process.
 * - AiTransactionExplainerInput - The input type for the aiTransactionExplainer function.
 * - AiTransactionExplainerOutput - The return type for the aiTransactionExplainer function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiTransactionExplainerInputSchema = z.object({
  transactionDescription: z
    .string()
    .describe(
      'A complex bank transaction description or financial jargon to be explained.'
    ),
});
export type AiTransactionExplainerInput = z.infer<
  typeof AiTransactionExplainerInputSchema
>;

const AiTransactionExplainerOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A simple, easy-to-understand explanation in Portuguese.'),
});
export type AiTransactionExplainerOutput = z.infer<
  typeof AiTransactionExplainerOutputSchema
>;

export async function aiTransactionExplainer(
  input: AiTransactionExplainerInput
): Promise<AiTransactionExplainerOutput> {
  return aiTransactionExplainerFlow(input);
}

const explainTransactionPrompt = ai.definePrompt({
  name: 'explainTransactionPrompt',
  input: { schema: AiTransactionExplainerInputSchema },
  output: { schema: AiTransactionExplainerOutputSchema },
  prompt: `Você é um especialista financeiro com a habilidade de explicar termos complexos de forma simples e clara para leigos.

Por favor, explique a seguinte descrição de transação bancária ou jargão financeiro em português simples e fácil de entender, como se estivesse explicando para alguém que não possui conhecimento financeiro. Evite termos técnicos e seja conciso.

Descrição da Transação: {{{transactionDescription}}} `,
});

const aiTransactionExplainerFlow = ai.defineFlow(
  {
    name: 'aiTransactionExplainerFlow',
    inputSchema: AiTransactionExplainerInputSchema,
    outputSchema: AiTransactionExplainerOutputSchema,
  },
  async (input) => {
    const { output } = await explainTransactionPrompt(input);
    return output!;
  }
);
