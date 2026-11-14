import { Component } from '@angular/core';
import { Quiz } from '../../../../components/quiz/quiz';
import { perguntasMedias } from '../../../../data/perguntas';

@Component({
  selector: 'app-medium',
  standalone: true,
  imports: [Quiz],
  templateUrl: './medium.html'
})
export class Medium {
  bancoPerguntas = perguntasMedias;
}