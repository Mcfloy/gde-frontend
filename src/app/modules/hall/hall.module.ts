import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallComponent } from './hall.component';
import { HallRoutingModule } from './hall-routing.module';

@NgModule({
  declarations: [HallComponent],
  imports: [
    CommonModule,
    HallRoutingModule
  ]
})
export class HallModule { }
