<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRangePickerComponent } from './date-range-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BsDatepickerModule,
 
} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
  ],
  exports: [
    DateRangePickerComponent,
  ]
})
export class DateRangePickerModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRangePickerComponent } from './date-range-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BsDatepickerModule,
 
} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
  ],
  exports: [
    DateRangePickerComponent,
  ]
})
export class DateRangePickerModule { }
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
