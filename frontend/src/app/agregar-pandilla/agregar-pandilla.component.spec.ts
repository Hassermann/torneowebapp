import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPandillaComponent } from './agregar-pandilla.component';

describe('AgregarPandillaComponent', () => {
  let component: AgregarPandillaComponent;
  let fixture: ComponentFixture<AgregarPandillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPandillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPandillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
