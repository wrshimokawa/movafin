'use client';

import { useState } from 'react';
import { Sparkles, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { aiTransactionExplainer } from '@/ai/flows/ai-transaction-explainer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AiExplainer() {
  const [inputText, setInputText] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleExplain = async () => {
    if (!inputText.trim()) {
      setError('Por favor, insira um texto para ser explicado.');
      return;
    }
    setIsLoading(true);
    setError('');
    setExplanation('');
    try {
      const result = await aiTransactionExplainer({ transactionDescription: inputText });
      setExplanation(result.explanation);
    } catch (e) {
      setError('Ocorreu um erro ao tentar explicar o texto. Tente novamente.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="sr-only">Explicador IA</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Explicador de Transações com IA</DialogTitle>
          <DialogDescription>
            Cole uma descrição de transação ou jargão financeiro complicado e a nossa IA irá traduzir para um português simples.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Ex: CRED TED-T E PAGTO FORNECEDOR"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
          />
          <Button onClick={handleExplain} disabled={isLoading}>
            {isLoading ? 'Explicando...' : 'Explicar Texto'}
          </Button>
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {explanation && (
             <Alert>
                <BrainCircuit className="h-4 w-4" />
                <AlertTitle>Explicação</AlertTitle>
                <AlertDescription>
                 {explanation}
                </AlertDescription>
              </Alert>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
