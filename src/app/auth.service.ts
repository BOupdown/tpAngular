import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false; 

  constructor() {}

  // check authentification
  checkAuthentication(): boolean {
    const result = localStorage.getItem('isAuthenticated');
    return result === 'true'; // Retourne true si la valeur est "true"
  }


  setAuth(param: boolean) {
    this.isAuthenticated = param;
    localStorage.setItem('isAuthenticated', String(param)); // Stocke true/false en tant que chaîne
  }

}