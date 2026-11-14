import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Termos } from './pages/infos/termos/termos';
import { Privacidade } from './pages/infos/privacidade/priv';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'termos', component: Termos },
  { path: 'privacidade', component: Privacidade },
  { path: '**', redirectTo: '' }
];