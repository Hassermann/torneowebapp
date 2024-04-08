import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandillasComponent } from './pandillas.component';

describe('PandillasComponent', () => {
  let component: PandillasComponent;
  let fixture: ComponentFixture<PandillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
