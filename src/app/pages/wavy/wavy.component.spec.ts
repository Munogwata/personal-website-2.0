import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyComponent } from './wavy.component';

describe('WavyComponent', () => {
  let component: WavyComponent;
  let fixture: ComponentFixture<WavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
