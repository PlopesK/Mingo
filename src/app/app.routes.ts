import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Challenge } from './pages/challenge/challenge';
import { Hub } from './pages/challenge/hub/hub';

import { Easy } from './pages/challenge/hub/levelSelect/easy';
import { Medium } from './pages/challenge/hub/levelSelect/medium';
import { Hard } from './pages/challenge/hub/levelSelect/hard';

import { Termos } from './pages/infos/termos/termos';
import { Privacidade } from './pages/infos/privacidade/priv';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'challenge', component: Challenge },
  { path: 'hub', component: Hub },
  { path: 'easy', component: Easy },
  { path: 'medium', component: Medium },
  { path: 'hard', component: Hard },
  { path: 'termos', component: Termos },
  { path: 'privacidade', component: Privacidade },
  { path: '**', redirectTo: '' }
];