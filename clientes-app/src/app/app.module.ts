import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ClientesModule } from './clientes/clientes.module'; //Import del módulo clientes

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule //Añadimos la libreria al modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
