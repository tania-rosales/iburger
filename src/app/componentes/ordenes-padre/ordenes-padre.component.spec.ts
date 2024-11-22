import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesPadreComponent } from './ordenes-padre.component';

describe('OrdenesPadreComponent', () => {
  let component: OrdenesPadreComponent;
  let fixture: ComponentFixture<OrdenesPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
