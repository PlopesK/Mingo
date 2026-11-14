import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  obterResultados,
  limparResultados,
  ResultadoQuiz
} from '../../../data/resultados';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './historico.html',
  styleUrl: './historico.css'
})
export class Historico implements OnInit {

  resultados: ResultadoQuiz[] = [];

  ngOnInit() {
    this.carregarResultados();
  }

  carregarResultados() {
    this.resultados = obterResultados();
  }

  apagarHistorico() {
    const confirmar = window.confirm(
      'Tem certeza de que deseja apagar todo o histórico?'
    );

    if (confirmar) {
      limparResultados();
      this.resultados = [];
    }
  }

  get totalPartidas(): number {
    return this.resultados.length;
  }

  get totalAcertos(): number {
    return this.resultados.reduce(
      (total, resultado) => total + resultado.acertos,
      0
    );
  }

  get totalQuestoes(): number {
    return this.resultados.reduce(
      (total, resultado) => total + resultado.total,
      0
    );
  }

  get mediaAcertos(): number {
    if (this.totalQuestoes === 0) return 0;

    return Math.round(
      (this.totalAcertos / this.totalQuestoes) * 100
    );
  }

  get melhorResultado(): number {
    if (this.resultados.length === 0) return 0;

    return Math.max(
      ...this.resultados.map(resultado => resultado.percentual)
    );
  }

  get ultimosResultados(): ResultadoQuiz[] {
    return [...this.resultados]
      .reverse()
      .slice(-10);
  }

  get maiorPercentual(): number {
    if (this.ultimosResultados.length === 0) return 100;

    return 100;
  }
}