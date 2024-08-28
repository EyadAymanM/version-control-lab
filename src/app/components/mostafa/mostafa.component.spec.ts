import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostafaComponent } from './mostafa.component';

describe('MostafaComponent', () => {
  let component: MostafaComponent;
  let fixture: ComponentFixture<MostafaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostafaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
