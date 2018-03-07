import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //Import para usar ngModel en formularios

//Se importa el servicio para recuperar datos de nuestros objetos y los componentes a usar
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

@NgModule({
  imports: [ //modulos
    CommonModule,
    FormsModule
  ],
  providers: [ //servicios
    ClientesService
  ],
  declarations: [ //componentes
    AltaClienteComponent, ListadoClientesComponent
  ],
  exports: [ //exportación de los componentes a usar en otro módulo
    AltaClienteComponent, ListadoClientesComponent
  ]
})
export class ClientesModule { }
