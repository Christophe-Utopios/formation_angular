import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Blocks } from './pages/blocks/blocks';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "blocks", component: Blocks}
];
