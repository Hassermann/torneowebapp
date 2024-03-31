import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEncuestaComponent } from './agregar-encuesta.component';

describe('AgregarEncuestaComponent', () => {
  let component: AgregarEncuestaComponent;
  let fixture: ComponentFixture<AgregarEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEncuestaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
