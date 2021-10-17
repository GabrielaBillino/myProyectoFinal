import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionImagenComponent } from './gestion-imagen.component';

describe('GestionImagenComponent', () => {
  let component: GestionImagenComponent;
  let fixture: ComponentFixture<GestionImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
