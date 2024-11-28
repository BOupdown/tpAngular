import { Routes } from '@angular/router';
import { AffichageComponent } from './affichage/affichage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./auth.guard";


export const routes: Routes = [
    { path: 'affiche', component: AffichageComponent, canActivate: [AuthGuard], },
    { path: '', component: LoginComponent },
];
