import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos con componentes
import { MimoduloModule } from './mimodulo/mimodulo.module';
import { FigurasModule } from './figuras/figuras.module';
import { FacturacionModule } from './facturacion/facturacion.module';
//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BotonSinoComponent } from './boton-sino/boton-sino.component';
import { ListadoPreguntasComponent } from './listado-preguntas/listado-preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BotonSinoComponent,
    ListadoPreguntasComponent
  ],
  imports: [
    BrowserModule,
    MimoduloModule,
    FigurasModule,
    FacturacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
