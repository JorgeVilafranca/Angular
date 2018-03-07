import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't3-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public titulo: string = "Mis empleados";

  constructor() { }

  ngOnInit() { }
}
