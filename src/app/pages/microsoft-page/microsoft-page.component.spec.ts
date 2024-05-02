import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftPageComponent } from './microsoft-page.component';

describe('MicrosoftPageComponent', () => {
  let component: MicrosoftPageComponent;
  let fixture: ComponentFixture<MicrosoftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrosoftPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrosoftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
