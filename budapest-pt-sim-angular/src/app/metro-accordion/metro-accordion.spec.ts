import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroAccordion } from './metro-accordion';

describe('MetroAccordion', () => {
  let component: MetroAccordion;
  let fixture: ComponentFixture<MetroAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetroAccordion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetroAccordion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
