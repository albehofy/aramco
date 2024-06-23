import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesHoldersComponent } from './companies-holders.component';

describe('CompaniesHoldersComponent', () => {
  let component: CompaniesHoldersComponent;
  let fixture: ComponentFixture<CompaniesHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompaniesHoldersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompaniesHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
