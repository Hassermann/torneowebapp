import { Time } from "@angular/common";

export class Evento {
    id_evento!: number;
    nombre!: string;
    fecha_inicio!: Date;
    fecha_final!: Date;
    hora_inicio!: Time
    hora_final!: Time;
    descripcion!: string;
    colonia!: string;
    ciudad!: string;    
  }