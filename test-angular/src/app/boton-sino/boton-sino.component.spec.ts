import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSinoComponent } from './boton-sino.component';

describe('BotonSinoComponent', () => {
  let component: BotonSinoComponent;
  let fixture: ComponentFixture<BotonSinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonSinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonSinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
