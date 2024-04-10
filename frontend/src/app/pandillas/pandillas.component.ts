import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ServicioService } from '../servicio/servicio.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pandilla } from '../model/Pandilla';

@Component({
  selector: 'app-pandillas',
  templateUrl: './pandillas.component.html',
  styleUrls: ['./pandillas.component.css']
})
export class PandillasComponent implements OnInit {

  pandillas = new MatTableDataSource<Pandilla>([]); // Your data as MatTableDataSource
  displayedColumns: string[] = ['nombre','ciudad','estado','ver']; // Agrega más nombres de columnas según sea necesario

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private servicio: ServicioService,private router: Router) {
  }

  ngAfterViewInit() {
    this.pandillas.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.servicio.getEncuestas().forEach((element:any) => {
      this.pandillas.data = element;
    });
  }

  verEncuesta(pandilla: Pandilla) {
    this.router.navigate(['/ver-pandilla'], { queryParams: { id_pandilla: pandilla.id_pandilla} });
  }

  volver() {
    this.router.navigate(['/inicio']);
  }
}
