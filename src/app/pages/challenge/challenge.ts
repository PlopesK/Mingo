import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './challenge.css',
  templateUrl: './challenge.html',
})
export class Challenge {}
