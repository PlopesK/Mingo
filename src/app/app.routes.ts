import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Challenge } from './pages/challenge/challenge';
import { Hub } from './pages/challenge/hub/hub';
import { Termos } from './pages/infos/termos/termos';
import { Privacidade } from './pages/infos/privacidade/priv';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'challenge', component: Challenge },
  { path: 'hub', component: Hub },
  { path: 'termos', component: Termos },
  { path: 'privacidade', component: Privacidade },
  { path: '**', redirectTo: '' }
];