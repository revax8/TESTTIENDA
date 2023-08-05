import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloTiendaComponent } from './articulo-tienda.component';

describe('ArticuloTiendaComponent', () => {
  let component: ArticuloTiendaComponent;
  let fixture: ComponentFixture<ArticuloTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloTiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
