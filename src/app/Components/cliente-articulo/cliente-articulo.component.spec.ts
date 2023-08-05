import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteArticuloComponent } from './cliente-articulo.component';

describe('ClienteArticuloComponent', () => {
  let component: ClienteArticuloComponent;
  let fixture: ComponentFixture<ClienteArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
