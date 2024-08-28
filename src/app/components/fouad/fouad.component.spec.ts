import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FouadComponent } from './fouad.component';

describe('FouadComponent', () => {
  let component: FouadComponent;
  let fixture: ComponentFixture<FouadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FouadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FouadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
