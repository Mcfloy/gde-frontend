import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallComponent } from './hall.component';
import { HallRoutingModule } from './hall-routing.module';
import { MockRibbonService } from 'src/app/core/mocks/mock.ribbon.service';
import { MockRibbonCategoryService } from 'src/app/core/mocks/mock.ribbon-category.service';

@NgModule({
  declarations: [HallComponent],
  imports: [
    CommonModule,
    HallRoutingModule
  ],
  providers: [
    { provide: 'RibbonService', useClass: MockRibbonService },
    { provide: 'RibbonCategoryService', useClass: MockRibbonCategoryService }
  ]
})
export class HallModule { }
