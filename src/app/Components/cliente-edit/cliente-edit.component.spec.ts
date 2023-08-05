import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditComponent } from './cliente-edit.component';

describe('ClienteEditComponent', () => {
  let component: ClienteEditComponent;
  let fixture: ComponentFixture<ClienteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
