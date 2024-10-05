<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonComponent } from './coming-soon.component';

describe('ComingSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComingSoonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonComponent } from './coming-soon.component';

describe('ComingSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComingSoonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
