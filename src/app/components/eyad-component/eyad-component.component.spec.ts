import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyadComponentComponent } from './eyad-component.component';

describe('EyadComponentComponent', () => {
  let component: EyadComponentComponent;
  let fixture: ComponentFixture<EyadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyadComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
