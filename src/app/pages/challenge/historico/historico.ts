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
}