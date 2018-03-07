import { Injectable } from '@angular/core';

//Se importan los modelos de los objetos que se van usar en este servicio
import { Cliente } from '../models/cliente.model';
import { Grupo } from '../models/grupo.model';

@Injectable()
export class ClientesService {

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.clientes = [];
  }

  //Devuelve el array de grupos
  getGrupos() {
    return this.grupos;
  }

  //Devuelve el array de clientes
  getClientes() {
    return this.clientes;
  }

  //Añade un cliente a la lista clientes
  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  //Nuevo objeto cliente
  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    };
  }
}
