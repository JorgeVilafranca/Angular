import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ClientesService } from './clientes.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListadoClientesComponent],
  exports: [ListadoClientesComponent],
  providers: [ClientesService]
})
export class FacturacionModule { }
