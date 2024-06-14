import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarEncuestaComponent } from './agregar-encuesta/agregar-encuesta.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { PandillasComponent } from './pandillas/pandillas.component';
import { AgregarPandillaComponent } from './agregar-pandilla/agregar-pandilla.component';
import { EventosComponent } from './eventos/eventos.component';
import { AgregarEventoComponent } from './agregar-evento/agregar-evento.component';
import { AgregarAsistenciaComponent } from './agregar-asistencia/agregar-asistencia.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'agregar-encuesta', component: AgregarEncuestaComponent },
    { path: 'ver-encuesta', component: AgregarEncuestaComponent },
    { path: 'encuestas', component: EncuestasComponent },
    { path: 'pandillas', component: PandillasComponent },
    { path: 'agregar-pandillas', component: AgregarPandillaComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'agregar-eventos', component: AgregarEventoComponent},
    { path: 'agregar-asistencias', component: AgregarAsistenciaComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // redirect to `inicio-component`
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
