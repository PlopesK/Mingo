import { Component, Input, OnInit } from '@angular/core';
import {
  Pergunta,
  sortearPerguntas
} from '../../data/perguntas';
import { salvarResultado } from '../../data/resultados';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz implements OnInit {

  @Input() bancoPerguntas: Pergunta[] = [];
  @Input() quantidade: number = 5;
  @Input() dificuldade: string = '';

  perguntas: Pergunta[] = [];

  indiceAtual = 0;
  respostaAtual: number | null = null;

  respostasSelecionadas: number[] = [];

  finalizado = false;

  ngOnInit() {
    this.novaPartida();
  }

  get perguntaAtual(): Pergunta {
    return this.perguntas[this.indiceAtual];
  }

  get acertos(): number {
    return this.perguntas.filter(
      (pergunta, indice) =>
        this.respostasSelecionadas[indice] === pergunta.respostaCorreta
    ).length;
  }

  selecionarResposta(indice: number) {
    this.respostaAtual = indice;
  }

  proximaPergunta() {

    if (this.respostaAtual === null) {
      return;
    }

    this.respostasSelecionadas[this.indiceAtual] =
      this.respostaAtual;

    if (this.indiceAtual < this.perguntas.length - 1) {

      this.indiceAtual++;
      this.respostaAtual = null;

    } else {

      this.finalizado = true;

      salvarResultado({
        dificuldade: this.dificuldade,
        acertos: this.acertos,
        total: this.perguntas.length,
        percentual: Math.round(
          (this.acertos / this.perguntas.length) * 100
        ),
        data: new Date().toISOString()
      });

    }
  }

  private idsUltimaPartida: number[] = [];
  novaPartida() {
    let novasPerguntas = sortearPerguntas(
      this.bancoPerguntas,
      this.quantidade
    );

    let tentativa = 0;

    const idsAtuais = () =>
      novasPerguntas.map(p => p.id).sort((a, b) => a - b);

    while (
      this.bancoPerguntas.length > this.quantidade &&
      JSON.stringify(idsAtuais()) === JSON.stringify(this.idsUltimaPartida) &&
      tentativa < 10
    ) {
      novasPerguntas = sortearPerguntas(
        this.bancoPerguntas,
        this.quantidade
      );

      tentativa++;
    }

    this.perguntas = novasPerguntas;
    this.idsUltimaPartida = idsAtuais();

    this.indiceAtual = 0;
    this.respostaAtual = null;
    this.respostasSelecionadas = [];
    this.finalizado = false;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}