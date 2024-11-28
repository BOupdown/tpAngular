import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../publication.service'; // Import du service
import { FormsModule } from '@angular/forms'; // Import du FormsModule
import { CommonModule } from '@angular/common'; // Import du CommonModule
import { Router } from '@angular/router'; // Import du Router

@Component({
  selector: 'app-affichage',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ajout de CommonModule ici
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  joke: string | null = null;  // Variable pour stocker la blague
  newText: string = '';        // Texte entré par l'utilisateur
  newRecipient: string = '';   // Destinataire du message
  messages: { text: string, recipient: string }[] = [];  // Tableau pour stocker les messages et leurs destinataires

  constructor(private publicationService: PublicationService, private router: Router) { } // Injection du Router

  ngOnInit(): void {
    // Appel de la méthode du service pour récupérer la blague
    this.publicationService.fetchAndStoreJoke().subscribe((joke) => {
      this.joke = joke;  // Stocke la blague dans la variable 'joke'
    });
  }

  addMessage() {
    if (this.newText.trim() && this.newRecipient.trim()) {
      this.messages.push({
        text: this.newText,
        recipient: this.newRecipient
      });  // Ajoute le message et le destinataire au tableau
      this.newText = '';  // Réinitialise le champ de texte
      this.newRecipient = '';  // Réinitialise le champ du destinataire
    }
  }

  onButtonClick() {
    localStorage.setItem('isAuthenticated', "false");
    this.router.navigate(['/']); // Redirection vers la route '/login'
  } 
}
