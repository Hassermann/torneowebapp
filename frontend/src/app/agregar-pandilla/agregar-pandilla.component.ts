import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-pandilla',
  templateUrl: './agregar-pandilla.component.html',
  styleUrls: ['./agregar-pandilla.component.css']
})
export class AgregarPandillaComponent implements OnInit {

  constructor(private servicio: ServicioService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  navigateToInicio(){
    
      this.router.navigate(['/inicio']);
    
    
  }
}
