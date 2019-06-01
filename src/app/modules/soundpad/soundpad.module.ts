import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundpadComponent } from './soundpad.component';
import { SoundpadRoutingModule } from './soundpad-routing.module';

@NgModule({
  declarations: [SoundpadComponent],
  imports: [
    CommonModule,
    SoundpadRoutingModule
  ],
  exports: [SoundpadComponent]
})
export class SoundpadModule { }
