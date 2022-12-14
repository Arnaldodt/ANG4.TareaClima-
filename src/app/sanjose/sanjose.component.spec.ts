import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjoseComponent } from './sanjose.component';

describe('SanjoseComponent', () => {
  let component: SanjoseComponent;
  let fixture: ComponentFixture<SanjoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanjoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanjoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
