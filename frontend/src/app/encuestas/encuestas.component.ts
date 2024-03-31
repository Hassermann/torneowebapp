import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ServicioService } from '../servicio/servicio.service';
import { Encuestado } from '../model/Encuestado';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrl: './encuestas.component.css'
})
export class EncuestasComponent  implements OnInit {
  encuestas = new MatTableDataSource<Encuestado>([]); // Your data as MatTableDataSource
  displayedColumns: string[] = ['nombre','apodo','edad','sexo','ver']; // Agrega más nombres de columnas según sea necesario

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private servicio: ServicioService,private router: Router) {
  }

  ngAfterViewInit() {
    this.encuestas.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.servicio.getEncuestas().forEach((element:any) => {
      this.encuestas.data = element;
    });
  }

  verEncuesta(encuesta: Encuestado) {
    this.router.navigate(['/ver-encuesta'], { queryParams: { id_encuestado: encuesta.id_encuestado } });
  }

  volver() {
    this.router.navigate(['/inicio']);
  }
}
