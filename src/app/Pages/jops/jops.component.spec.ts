import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JopsComponent } from './jops.component';

describe('JopsComponent', () => {
  let component: JopsComponent;
  let fixture: ComponentFixture<JopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
