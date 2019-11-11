import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasFinalesComponent } from './respuestas-finales.component';

describe('RespuestasFinalesComponent', () => {
  let component: RespuestasFinalesComponent;
  let fixture: ComponentFixture<RespuestasFinalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestasFinalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestasFinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
