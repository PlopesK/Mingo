export interface ResultadoQuiz {
  dificuldade: string;
  acertos: number;
  total: number;
  percentual: number;
  data: string;
}

const CHAVE_RESULTADOS = 'mingo-resultados';

export function obterResultados(): ResultadoQuiz[] {
  try {
    const dados = localStorage.getItem(CHAVE_RESULTADOS);
    return dados ? JSON.parse(dados) as ResultadoQuiz[] : [];
  } catch {
    return [];
  }
}

export function salvarResultado(resultado: ResultadoQuiz): void {
  const historico = obterResultados();

  historico.unshift(resultado);

  try {
    localStorage.setItem(CHAVE_RESULTADOS, JSON.stringify(historico));
  } catch (erro) {
    console.error('Não foi possível salvar o resultado:', erro);
  }
}

export function limparResultados(): void {
  localStorage.removeItem(CHAVE_RESULTADOS);
}