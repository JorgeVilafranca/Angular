import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-sino',
  templateUrl: './boton-sino.component.html',
  styleUrls: ['./boton-sino.component.css']
})
export class BotonSinoComponent implements OnInit {

  texto: string =  "SI";
  estadoPositivo: boolean = true;

  constructor() { }

  ngOnInit() { }

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo;
  }
}
