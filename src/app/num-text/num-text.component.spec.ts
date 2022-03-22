import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumTextComponent } from './num-text.component';

describe('NumTextComponent', () => {
  let component: NumTextComponent;
  let fixture: ComponentFixture<NumTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
