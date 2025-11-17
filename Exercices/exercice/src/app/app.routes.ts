import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { SeriesComponent } from './pages/series/series.component';

export const routes: Routes = [
  { path: '', component: Counter },
  { path: 'series', component: SeriesComponent },
];
