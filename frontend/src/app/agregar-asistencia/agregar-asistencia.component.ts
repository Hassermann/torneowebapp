import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Encuestado } from '../model/Encuestado';

@Component({
  selector: 'app-agregar-asistencia',
  templateUrl: './agregar-asistencia.component.html',
  styleUrls: ['./agregar-asistencia.component.css']
})
export class AgregarAsistenciaComponent implements OnInit {
  
  encuestas = new MatTableDataSource<Encuestado>([]); // Your data as MatTableDataSource
  displayedColumns: string[] = ['nombre','apodo','pandilla','opciones']; // Agrega más nombres de columnas según sea necesario

  constructor(private servicio: ServicioService, 
    private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  navigateToInicio(){
    
    this.router.navigate(['/inicio']);
  
  
}}
