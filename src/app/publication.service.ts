import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  fetchAndStoreJoke() {
    // Exemple de récupération d'une blague
    return of('Voici une blague : Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent toujours dans le bateau !');
  }
}
