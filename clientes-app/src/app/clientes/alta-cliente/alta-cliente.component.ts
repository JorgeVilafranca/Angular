import { Component, OnInit } from '@angular/core';

//Importación del servicio que necesitamos y los modelos que utiliza
import { ClientesService } from '../clientes.service';
import { Cliente } from '../../models/cliente.model';
import { Grupo } from '../../models/grupo.model';

@Component({
  selector: 'cli-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  public cliente: Cliente;
  public grupos: Grupo[];

  //Se hace una instancia del servicio en el constructor
  constructor(private clientesService: ClientesService) { }

  //Se inician los valores de las variables del componente
  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  //Se añade un nuevo cliente
  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }
}
