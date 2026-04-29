'use client';

import { useState } from 'react';
import { Sparkles, Loader2, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aiSuggestedTransactionCategories } from '@/ai/flows/ai-suggested-transaction-categories';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type AiCategorySuggesterProps = {
  description: string;
  amount: number;
  onCategorySelect: (categoryName: string) => void;
};

export function AiCategorySuggester({ description, amount, onCategorySelect }: AiCategorySuggesterProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  const handleSuggestCategories = async () => {
    setSuggestions([]);
    setError('');
    setInfo('');

    if (!description.trim()) {
      setError('A descrição é obrigatória para obter sugestões.');
      return;
    }
    if (amount === 0) {
      setError('O valor da transação deve ser diferente de zero.');
      return;
    }
    
    setIsLoading(true);

    try {
      const result = await aiSuggestedTransactionCategories({ description, amount });
      if (result.suggestedCategories.length === 0) {
        setInfo("Nenhuma sugestão de categoria foi encontrada para esta descrição.");
      } else {
        setSuggestions(result.suggestedCategories);
      }
    } catch (e) {
      setError('Ocorreu um erro ao comunicar com a IA. Tente novamente.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 rounded-lg border p-4 bg-muted/50">
      <div className='flex items-start gap-3'>
        <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1"/>
        <div>
            <h4 className="font-semibold text-card-foreground">Sugestão de Categoria com IA</h4>
            <p className="text-sm text-muted-foreground">
                Receba sugestões de categoria baseadas na descrição e valor.
            </p>
        </div>
      </div>
      
      <Button 
        type="button"
        onClick={handleSuggestCategories} 
        disabled={isLoading} 
        variant="outline"
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Buscando sugestões...
          </>
        ) : (
          "Sugerir categorias"
        )}
      </Button>

      {error && (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {info && (
         <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Aviso</AlertTitle>
            <AlertDescription>{info}</AlertDescription>
        </Alert>
      )}

      {suggestions.length > 0 && (
        <div>
            <p className="text-sm font-medium mb-2">Clique para selecionar uma categoria:</p>
            <div className="flex flex-wrap items-center gap-2">
                {suggestions.map((suggestion) => (
                    <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        key={suggestion}
                        onClick={() => onCategorySelect(suggestion)}
                        className="font-normal"
                    >
                        {suggestion}
                    </Button>
                ))}
            </div>
        </div>
      )}
    </div>
  );
}
