import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from '../../servicio/servicio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  constructor(private servicio: ServicioService,private router: Router) {
  }
  volver() {
    this.router.navigate(['/inicio']);
  }
}
