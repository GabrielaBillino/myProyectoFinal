import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPedidoComponent } from './listado-pedido.component';

describe('ListadoPedidoComponent', () => {
  let component: ListadoPedidoComponent;
  let fixture: ComponentFixture<ListadoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
