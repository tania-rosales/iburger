import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosComponentComponent } from './combos-component.component';

describe('CombosComponentComponent', () => {
  let component: CombosComponentComponent;
  let fixture: ComponentFixture<CombosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
