// Interface padrão das perguntas //
export interface Pergunta {
  id: number;
  enunciado: string;
  alternativas: string[];
  respostaCorreta: number;
  explicacao: string;
}

// ********************************************** //
// ************* Perguntas fáceis ************* //
// ********************************************** //
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

// ********************************************** //
// ************* Perguntas Médias ************* //
// ********************************************** //
export const perguntasMedias: Pergunta[] = [
  {
    id: 11,
    enunciado: 'Choose the correct sentence in the Past Simple:',
    alternativas: [
      'I go to school yesterday.',
      'I went to school yesterday.',
      'I gone to school yesterday.',
      'I going to school yesterday.'
    ],
    respostaCorreta: 1,
    explicacao: 'Went é o passado irregular do verbo go. Usamos Past Simple para ações concluídas no passado.'
  },
  {
    id: 12,
    enunciado: 'Complete: My house is _____ than yours.',
    alternativas: [
      'big',
      'biggest',
      'bigger',
      'more big'
    ],
    respostaCorreta: 2,
    explicacao: 'Para comparar duas coisas, usamos bigger (maior). Em adjetivos curtos, geralmente acrescentamos -er.'
  },
  {
    id: 13,
    enunciado: 'Complete: She _____ visited London three times.',
    alternativas: [
      'have',
      'has',
      'had',
      'is'
    ],
    respostaCorreta: 1,
    explicacao: 'No Present Perfect, usamos has com he, she e it. A estrutura é has + particípio passado.'
  },
  {
    id: 14,
    enunciado: 'Complete: The meeting starts _____ 7 o’clock.',
    alternativas: [
      'in',
      'on',
      'at',
      'by'
    ],
    respostaCorreta: 2,
    explicacao: 'Usamos at para horários específicos, como at 7 o’clock.'
  },
  {
    id: 15,
    enunciado: 'What does "Although" mean in Portuguese?',
    alternativas: [
      'Portanto',
      'Embora',
      'Enquanto',
      'Porque'
    ],
    respostaCorreta: 1,
    explicacao: 'Although significa embora, e é usado para introduzir uma ideia de contraste.'
  },
  {
    id: 16,
    enunciado: 'Complete: How _____ water do you drink every day?',
    alternativas: [
      'many',
      'much',
      'few',
      'several'
    ],
    respostaCorreta: 1,
    explicacao: 'Usamos much com substantivos incontáveis, como water. Many é usado com substantivos contáveis no plural.'
  },
  {
    id: 17,
    enunciado: 'Complete: I have lived here _____ 2020.',
    alternativas: [
      'for',
      'during',
      'since',
      'from'
    ],
    respostaCorreta: 2,
    explicacao: 'Since indica o ponto em que algo começou. For indica a duração de um período.'
  },
  {
    id: 18,
    enunciado: 'Choose the correct translation: "Eu vou estudar amanhã."',
    alternativas: [
      'I studied tomorrow.',
      'I am going to study tomorrow.',
      'I have study tomorrow.',
      'I was study tomorrow.'
    ],
    respostaCorreta: 1,
    explicacao: 'A estrutura going to expressa planos ou intenções futuras: sujeito + am/is/are + going to + verbo.'
  },
  {
    id: 19,
    enunciado: 'Complete: There aren’t _____ chairs in the room.',
    alternativas: [
      'much',
      'any',
      'a little',
      'a'
    ],
    respostaCorreta: 1,
    explicacao: 'Any é usado frequentemente em frases negativas e perguntas, com substantivos contáveis no plural e incontáveis.'
  },
  {
    id: 20,
    enunciado: 'Choose the correct question:',
    alternativas: [
      'Where you live?',
      'Where does you live?',
      'Where do you live?',
      'Where are you live?'
    ],
    respostaCorreta: 2,
    explicacao: 'No Present Simple, usamos do para formar perguntas com I, you, we e they.'
  }
];

// ********************************************** //
// ************* Perguntas Dificeis ************* //
// ********************************************** //
export const perguntasDificeis: Pergunta[] = [
  {
    id: 21,
    enunciado: 'Complete the Third Conditional: If I had studied harder, I _____ the exam.',
    alternativas: [
      'will pass',
      'would pass',
      'would have passed',
      'had passed'
    ],
    respostaCorreta: 2,
    explicacao: 'O Third Conditional fala de situações hipotéticas no passado. Sua estrutura é If + Past Perfect, would have + particípio passado.'
  },
  {
    id: 22,
    enunciado: 'Choose the correct Passive Voice sentence:',
    alternativas: [
      'The company founded in 1990.',
      'The company was founded in 1990.',
      'The company is found in 1990.',
      'The company has found in 1990.'
    ],
    respostaCorreta: 1,
    explicacao: 'Na voz passiva do passado, usamos was/were + particípio passado. Founded é o particípio de found, no sentido de fundar.'
  },
  {
    id: 23,
    enunciado: 'Change to Reported Speech: She said, "I am tired."',
    alternativas: [
      'She said that I am tired.',
      'She said that she is tired.',
      'She said that she was tired.',
      'She said that she has tired.'
    ],
    respostaCorreta: 2,
    explicacao: 'No discurso indireto, quando o verbo introdutório está no passado, geralmente fazemos o backshift: am passa para was.'
  },
  {
    id: 24,
    enunciado: 'What does "reluctant" mean?',
    alternativas: [
      'Entusiasmado',
      'Relutante',
      'Confiante',
      'Indiferente'
    ],
    respostaCorreta: 1,
    explicacao: 'Reluctant descreve alguém que não está disposto ou está hesitante em fazer algo.'
  },
  {
    id: 25,
    enunciado: 'Complete the Mixed Conditional: If I had accepted that job, I _____ in London now.',
    alternativas: [
      'would live',
      'will live',
      'would be living',
      'would have lived'
    ],
    respostaCorreta: 2,
    explicacao: 'O Mixed Conditional conecta uma condição hipotética no passado a uma consequência no presente. Usamos If + Past Perfect e would + verbo.'
  },
  {
    id: 26,
    enunciado: 'Choose the correct sentence using a Modal Verb:',
    alternativas: [
      'You must to wear a seat belt.',
      'You must wearing a seat belt.',
      'You must wear a seat belt.',
      'You must wears a seat belt.'
    ],
    respostaCorreta: 2,
    explicacao: 'Depois de verbos modais como must, can e should, usamos o verbo principal na forma base, sem to.'
  },
  {
    id: 27,
    enunciado: 'Complete: The woman _____ lives next door is a doctor.',
    alternativas: [
      'which',
      'whose',
      'who',
      'where'
    ],
    respostaCorreta: 2,
    explicacao: 'Who é um pronome relativo utilizado para se referir a pessoas. Which é usado principalmente para coisas e animais.'
  },
  {
    id: 28,
    enunciado: 'What does the phrasal verb "give up" mean?',
    alternativas: [
      'Continuar',
      'Desistir',
      'Descobrir',
      'Entregar algo a alguém'
    ],
    respostaCorreta: 1,
    explicacao: 'Give up significa desistir ou abandonar uma tentativa, atividade ou hábito.'
  },
  {
    id: 29,
    enunciado: 'Complete: By the time we arrived, the movie _____.',
    alternativas: [
      'already started',
      'has already started',
      'had already started',
      'was already start'
    ],
    respostaCorreta: 2,
    explicacao: 'O Past Perfect indica uma ação que aconteceu antes de outra ação no passado. Sua estrutura é had + particípio passado.'
  },
  {
    id: 30,
    enunciado: 'Choose the correct meaning of "Nevertheless":',
    alternativas: [
      'Além disso',
      'Portanto',
      'No entanto',
      'Por exemplo'
    ],
    respostaCorreta: 2,
    explicacao: 'Nevertheless significa no entanto ou apesar disso. É usado para introduzir uma ideia que contrasta com a anterior.'
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