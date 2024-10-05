<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMaintenanceComponent } from './under-maintenance.component';

describe('UnderMaintenanceComponent', () => {
  let component: UnderMaintenanceComponent;
  let fixture: ComponentFixture<UnderMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnderMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMaintenanceComponent } from './under-maintenance.component';

describe('UnderMaintenanceComponent', () => {
  let component: UnderMaintenanceComponent;
  let fixture: ComponentFixture<UnderMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnderMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
