import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title:string = 'Manual de Angular de DesarrolloWeb.com';
  public visible:boolean = false;

  decirAdios() {
    this.visible = true;
  }
}
