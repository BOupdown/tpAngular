import { Routes } from '@angular/router';
import { AffichageComponent } from './affichage/affichage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'affiche', component: AffichageComponent },
    { path: '', component: LoginComponent },
];
