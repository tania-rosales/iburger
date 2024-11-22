import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaComboComponent } from './actualiza-combo.component';

describe('ActualizaComboComponent', () => {
  let component: ActualizaComboComponent;
  let fixture: ComponentFixture<ActualizaComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizaComboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
