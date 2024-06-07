import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsUsComponent } from './who-is-us.component';

describe('WhoIsUsComponent', () => {
  let component: WhoIsUsComponent;
  let fixture: ComponentFixture<WhoIsUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoIsUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoIsUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
