import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CuadradoComponent],
  exports: [CuadradoComponent]
})
export class FigurasModule { }
