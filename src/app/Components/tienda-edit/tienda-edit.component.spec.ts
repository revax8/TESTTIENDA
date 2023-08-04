import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaEditComponent } from './tienda-edit.component';

describe('TiendaEditComponent', () => {
  let component: TiendaEditComponent;
  let fixture: ComponentFixture<TiendaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
