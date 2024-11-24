import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaEmpleadoComponent } from './actualiza-empleado.component';

describe('ActualizaEmpleadoComponent', () => {
  let component: ActualizaEmpleadoComponent;
  let fixture: ComponentFixture<ActualizaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizaEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
