import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOrdenComponent } from './item-orden.component';

describe('ItemOrdenComponent', () => {
  let component: ItemOrdenComponent;
  let fixture: ComponentFixture<ItemOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
