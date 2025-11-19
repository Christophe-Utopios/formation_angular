import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { SeriesComponent } from './pages/series/series.component';
import { LibraryComponent } from './pages/library/library.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { Facts } from './pages/facts/facts';

export const routes: Routes = [
  { path: '', component: Counter },
  { path: 'series', component: SeriesComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'fact', component: Facts }
];
