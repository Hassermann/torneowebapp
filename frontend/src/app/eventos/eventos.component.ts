import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ServicioService } from '../servicio/servicio.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Evento } from '../model/Evento';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos= new MatTableDataSource<Evento>([]); // Your data as MatTableDataSource
  displayedColumns: string[] = ['nombre','descripcion','inicio','final','colonia','ciudad']; // Agrega más nombres de columnas según sea necesario

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private servicio: ServicioService,private router: Router) { }

  ngAfterViewInit() {
    this.eventos.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.servicio.getEncuestas().forEach((element:any) => {
      this.eventos.data = element;
    });
  }

  verEvento(evento: Evento) {
    this.router.navigate(['/ver-evento'], { queryParams: { id_pandilla: evento.id_evento} });
  }

  volver() {
    this.router.navigate(['/inicio']);
  }

}
