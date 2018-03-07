import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css']
})
export class CuadradoComponent implements OnInit {

  lado: number = 1;

  constructor() { }

  ngOnInit() { }

  cambiaLado(valor) {
    this.lado = valor;
  }
}
