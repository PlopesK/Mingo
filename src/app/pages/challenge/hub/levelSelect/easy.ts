import { Component } from '@angular/core';
//import { RouterLink } from '@angular/router';
import { Quiz } from '../../../../components/quiz/quiz';
import { perguntasFaceis } from '../../../../data/perguntas';

@Component({
  selector: 'app-easy',
  standalone: true,
  imports: [Quiz],
  styleUrl: './select.css',
  templateUrl: './easy.html',
})
export class Easy {
   bancoPerguntas = perguntasFaceis;
}
