// Interface padrão das perguntas //
export interface Pergunta {
  id: number;
  enunciado: string;
  alternativas: string[];
  respostaCorreta: number;
  explicacao: string;
}

// ************* Perguntas fáceis ************* //
export const perguntasFaceis: Pergunta[] = [
  {
    id: 1,
    enunciado: 'What is the meaning of "Apple"?',
    alternativas: ['Banana', 'Maçã', 'Laranja', 'Uva'],
    respostaCorreta: 1,
    explicacao: 'Apple significa maçã em português.'
  },
  {
    id: 2,
    enunciado: 'How do you say "Bom dia" in English?',
    alternativas: [
      'Good night',
      'Good afternoon',
      'Good morning',
      'Goodbye'
    ],
    respostaCorreta: 2,
    explicacao: 'Good morning é utilizado para cumprimentar alguém pela manhã.'
  },
  {
    id: 3,
    enunciado: 'Complete: She _____ my sister.',
    alternativas: ['am', 'are', 'is', 'be'],
    respostaCorreta: 2,
    explicacao: 'Utilizamos is com os pronomes he, she e it.'
  },
  {
    id: 4,
    enunciado: 'What number is "Twenty-five"?',
    alternativas: ['15', '20', '35', '25'],
    respostaCorreta: 3,
    explicacao: 'Twenty-five corresponde ao número 25.'
  },
  {
    id: 5,
    enunciado: 'What does "Thank you" mean?',
    alternativas: ['Por favor', 'Obrigado(a)', 'Desculpe', 'Até logo'],
    respostaCorreta: 1,
    explicacao: 'Thank you é uma expressão utilizada para agradecer.'
  },
  {
    id: 6,
    enunciado: 'Complete: I _____ a student.',
    alternativas: ['am', 'is', 'are', 'be'],
    respostaCorreta: 0,
    explicacao: 'O pronome I utiliza o verbo am.'
  },
  {
    id: 7,
    enunciado: 'What color is the sky on a clear day?',
    alternativas: ['Red', 'Blue', 'Green', 'Black'],
    respostaCorreta: 1,
    explicacao: 'Blue significa azul.'
  },
  {
    id: 8,
    enunciado: 'What does "How are you?" mean?',
    alternativas: [
      'Qual é seu nome?',
      'Quantos anos você tem?',
      'Como você está?',
      'Onde você mora?'
    ],
    respostaCorreta: 2,
    explicacao: 'How are you? é uma pergunta utilizada para saber como alguém está.'
  },
  {
    id: 9,
    enunciado: 'What is the plural of "Book"?',
    alternativas: ['Bookes', 'Books', 'Bookies', 'Book'],
    respostaCorreta: 1,
    explicacao: 'Na maioria dos substantivos, adicionamos S para formar o plural.'
  },
  {
    id: 10,
    enunciado: 'Complete: I have _____ orange.',
    alternativas: ['a', 'an', 'the', 'no article'],
    respostaCorreta: 1,
    explicacao: 'Utilizamos an antes de palavras com som inicial de vogal, como orange.'
  }
];

// ************* Sorteio de perguntas ************* //
export function sortearPerguntas(
  perguntas: Pergunta[],
  quantidade: number
): Pergunta[] {

  const embaralhadas = [...perguntas];

  for (let i = embaralhadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [embaralhadas[i], embaralhadas[j]] =
      [embaralhadas[j], embaralhadas[i]];
  }

  return embaralhadas.slice(0, quantidade);
}