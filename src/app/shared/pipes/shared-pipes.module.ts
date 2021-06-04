import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhoneNumberFormatterPipe } from './phone-number-formatter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PhoneNumberFormatterPipe
  ],
  exports: [
    PhoneNumberFormatterPipe
  ]
})
export class SharedPipesModule { }
