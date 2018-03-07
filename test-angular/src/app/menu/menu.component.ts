import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  dato = "Creando componentes para DesarrolloWeb.com";

  constructor() { }

  ngOnInit() {
    console.log('componente inicializado...');
  }
}
