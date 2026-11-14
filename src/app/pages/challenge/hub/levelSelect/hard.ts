import { Component } from '@angular/core';
import { Quiz } from '../../../../components/quiz/quiz';
import { perguntasDificeis } from '../../../../data/perguntas';

@Component({
  selector: 'app-hard',
  standalone: true,
  imports: [Quiz],
  templateUrl: './hard.html',
})
export class Hard {
  bancoPerguntas = perguntasDificeis;
}