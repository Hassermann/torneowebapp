import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private router: Router) { }

  navigateToEncuestas() {
    this.router.navigate(['/encuestas']);
  }

  navigateToAgregarEncuesta() {
    this.router.navigate(['/agregar-encuesta']);
  }

  navigateToPandillas() {
    this.router.navigate(['/pandillas']);
  }

  navigateToAgregarPandillas() {
    this.router.navigate(['/agregar-pandillas']);
  }

  navigateToEventos() {
    this.router.navigate(['/eventos']);
  }

  navigateToAgregarEventos() {
    this.router.navigate(['/agregar-eventos']);
  }
}
