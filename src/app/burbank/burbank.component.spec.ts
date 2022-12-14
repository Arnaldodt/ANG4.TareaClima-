import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurbankComponent } from './burbank.component';

describe('BurbankComponent', () => {
  let component: BurbankComponent;
  let fixture: ComponentFixture<BurbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
