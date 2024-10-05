<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPageComponent } from './blank-page.component';

describe('BlankPageComponent', () => {
  let component: BlankPageComponent;
  let fixture: ComponentFixture<BlankPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlankPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPageComponent } from './blank-page.component';

describe('BlankPageComponent', () => {
  let component: BlankPageComponent;
  let fixture: ComponentFixture<BlankPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlankPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
