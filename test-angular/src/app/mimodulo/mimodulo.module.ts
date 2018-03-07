import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicomponenteComponent } from './micomponente/micomponente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MicomponenteComponent],
  exports: [MicomponenteComponent]
})
export class MimoduloModule { }
