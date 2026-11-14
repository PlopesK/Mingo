import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hub.html',
  styleUrl: './hub.css',
})
export class Hub {}
