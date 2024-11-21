import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/affiche']);
    } else {
      alert('Identifiants incorrects');
    }
  }
}
