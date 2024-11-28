import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Ajout de l'option standalone ici
  imports: [FormsModule, CommonModule], // Ajout de CommonModule et FormsModule ici
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    // Vérifie si les identifiants sont corrects
    if (this.username === 'admin' && this.password === 'password') {
      this.authService.setAuth(true)
      this.router.navigate(['/affiche']);
    } else {
      alert('Identifiants incorrects');
      this.authService.setAuth(false)
    }
  }
}
