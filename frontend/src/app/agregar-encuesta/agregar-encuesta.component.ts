import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ServicioService } from '../servicio/servicio.service';
import { Encuestado } from '../model/Encuestado';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-encuesta',
  templateUrl: './agregar-encuesta.component.html',
  styleUrl: './agregar-encuesta.component.css'
})
export class AgregarEncuestaComponent implements OnInit {
  
  @ViewChild('myForm') ngForm: NgForm | undefined;
  
  selected = new FormControl(0);
  viviendaList:any;
  pandillaList:any;
  escolaridadList:any;
  civilList:any;
  laboralList:any;
  encuestado:Encuestado = new Encuestado();
  showAlert = false;
  id_encuestado:any;  

  constructor(private servicio: ServicioService, 
              private router: Router, private route: ActivatedRoute) { 

    this.servicio.getCatalog('vivienda').forEach((element:any) => {
      this.viviendaList = element;
    });
    this.servicio.getCatalog('escolarida').forEach((element:any) => {
      this.escolaridadList = element;
    });
    this.servicio.getCatalog('civil').forEach((element:any) => {
      this.civilList = element;
    });
    this.servicio.getCatalog('laboral').forEach((element:any) => {
      this.laboralList = element;
    });
    this.servicio.getPandillas().forEach((element:any) => {
      this.pandillaList = element;
    }); 

  }

  ngOnInit(): void {
    this.id_encuestado = this.route.snapshot.queryParamMap.get('id_encuestado');
    
    if (this.id_encuestado) {
      this.servicio.getEncuestado(this.id_encuestado).forEach((element:any) => {
        this.encuestado = element;
        console.log(this.encuestado);
      });
    }
  }

  pagAtras(index:any) {
  if (this.selected && this.selected.value != null) {
      this.selected.setValue(this.selected.value - index);
    }

  }
  
  pagDelante(index:any) {
    if (this.selected && this.selected.value != null && this.selected.value < 5) {
      this.selected.setValue(this.selected.value + index);
    }
  }

  guardar() {
    this.servicio.saveEncuestado(this.encuestado).subscribe((data:any) => {
      this.showAlert = true;
      setTimeout(() => {
        this.router.navigate(['/inicio']);
      }, 2000);
    });
  } 

  navigateToInicio(){
    if(!this.id_encuestado){
      this.router.navigate(['/inicio']);
    } else {  
      this.router.navigate(['/encuestas']);
    }
    
  }

}
