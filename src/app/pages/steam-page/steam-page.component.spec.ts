import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamPageComponent } from './steam-page.component';

describe('SteamPageComponent', () => {
  let component: SteamPageComponent;
  let fixture: ComponentFixture<SteamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
