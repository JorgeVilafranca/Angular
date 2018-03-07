import { Injectable } from '@angular/core';
import { Cliente } from './Cliente.modelo';

@Injectable()
export class ClientesService {

  clientes: Cliente[] = [];

  constructor() { }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  clienteNuevo(): Cliente {
    return {
      nombre: 'DesarrolloWeb.com',
      cif: 'B123',
      direccion: 'Oficinas de EscuelaIT, C/ Formación online nº 1',
      creado: new Date(Date.now())
    };
  }
}
