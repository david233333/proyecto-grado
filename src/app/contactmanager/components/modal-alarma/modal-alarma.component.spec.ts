import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlarmaComponent } from './modal-alarma.component';

describe('ModalAlarmaComponent', () => {
  let component: ModalAlarmaComponent;
  let fixture: ComponentFixture<ModalAlarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
