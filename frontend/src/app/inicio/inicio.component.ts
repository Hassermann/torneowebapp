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

}
