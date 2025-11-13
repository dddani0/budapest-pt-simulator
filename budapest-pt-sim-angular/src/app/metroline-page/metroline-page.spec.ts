import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetrolinePage } from './metroline-page';

describe('MetrolinePage', () => {
  let component: MetrolinePage;
  let fixture: ComponentFixture<MetrolinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetrolinePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetrolinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
