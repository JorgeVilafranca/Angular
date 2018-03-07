import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPreguntasComponent } from './listado-preguntas.component';

describe('ListadoPreguntasComponent', () => {
  let component: ListadoPreguntasComponent;
  let fixture: ComponentFixture<ListadoPreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
