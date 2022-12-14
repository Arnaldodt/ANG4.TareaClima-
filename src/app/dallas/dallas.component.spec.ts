import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DallasComponent } from './dallas.component';

describe('DallasComponent', () => {
  let component: DallasComponent;
  let fixture: ComponentFixture<DallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DallasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
