import { Component, OnInit } from '@angular/core';

//Importación del servicio que necesitamos y los modelos que utiliza
import { ClientesService } from '../clientes.service';
import { Cliente } from '../../models/cliente.model';
//import { Grupo } from '../../models/grupo.model';

@Component({
  selector: 'cli-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  public clientes: Cliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }
}
