import { Routes } from '@angular/router';
import { Lifecycle } from './pages/lifecycle/lifecycle';
import { FormationsComponent } from './pages/formations/formations';

export const routes: Routes = [
    {path: "lifecycle", component: Lifecycle},
    {path: "", component: FormationsComponent},
];
