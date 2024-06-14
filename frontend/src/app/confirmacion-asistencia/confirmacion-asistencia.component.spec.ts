import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionAsistenciaComponent } from './confirmacion-asistencia.component';

describe('ConfirmacionAsistenciaComponent', () => {
  let component: ConfirmacionAsistenciaComponent;
  let fixture: ComponentFixture<ConfirmacionAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionAsistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
