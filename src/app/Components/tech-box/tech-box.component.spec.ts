import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBoxComponent } from './tech-box.component';

describe('TechBoxComponent', () => {
  let component: TechBoxComponent;
  let fixture: ComponentFixture<TechBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
