import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimentComponent } from './regiment.component';
import { RegimentRoutingModule } from './regiment-routing.module';
import { MaterialModule } from 'src/app/shared/libs/material/material.module';

@NgModule({
  declarations: [RegimentComponent],
  imports: [
    CommonModule,
    RegimentRoutingModule,
    MaterialModule
  ]
})
export class RegimentModule { }
