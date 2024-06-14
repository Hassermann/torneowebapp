import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {

  constructor(private servicio: ServicioService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  navigateToInicio(){
    
    this.router.navigate(['/inicio']);
  
  
}
}
