import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosComponentComponent } from './empleados-component.component';

describe('EmpleadosComponentComponent', () => {
  let component: EmpleadosComponentComponent;
  let fixture: ComponentFixture<EmpleadosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
