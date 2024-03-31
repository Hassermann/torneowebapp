import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getCatalog(tipo: string) {
    return this.http.get(`api/catalogos?tipo=${tipo}`);
  }

  getPandillas() {
    return this.http.get(`api/pandillas`);
  }

  saveEncuestado(encuestado: any) { 
    return this.http.post<any>('api/agregarEncuesta', {encuestado:encuestado});
  }

  getEncuestas() {
    return this.http.get(`api/encuestas`);
  }

  getEncuestado(id_encuestado: any) {
    return this.http.get(`api/encuesta?id_encuestado=${id_encuestado}`);
  } 
  
}
