import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InicioComponent } from './inicio/inicio.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { AgregarEncuestaComponent } from './agregar-encuesta/agregar-encuesta.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { PandillasComponent } from './pandillas/pandillas.component';
import { AgregarPandillaComponent } from './agregar-pandilla/agregar-pandilla.component';
import { EventosComponent } from './eventos/eventos.component';
import { AgregarEventoComponent } from './agregar-evento/agregar-evento.component';
import { AgregarAsistenciaComponent } from './agregar-asistencia/agregar-asistencia.component';
import { ConfirmacionAsistenciaComponent } from './confirmacion-asistencia/confirmacion-asistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    EncuestasComponent,
    AgregarEncuestaComponent,
    PandillasComponent,
    AgregarPandillaComponent,
    EventosComponent,
    AgregarEventoComponent,
    AgregarAsistenciaComponent,
    ConfirmacionAsistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
