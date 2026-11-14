import { Component } from '@angular/core';
import { Quiz } from '../../../../components/quiz/quiz';
import { perguntasFaceis } from '../../../../data/perguntas';

@Component({
  selector: 'app-easy',
  standalone: true,
  imports: [Quiz],
  templateUrl: './easy.html',
})
export class Easy {
   bancoPerguntas = perguntasFaceis;
}
