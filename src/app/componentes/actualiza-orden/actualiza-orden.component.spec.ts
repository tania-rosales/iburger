import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaOrdenComponent } from './actualiza-orden.component';

describe('ActualizaOrdenComponent', () => {
  let component: ActualizaOrdenComponent;
  let fixture: ComponentFixture<ActualizaOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizaOrdenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
