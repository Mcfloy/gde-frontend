import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HallComponent } from './hall.component';

const routes: Route[] = [
  { path: '', component: HallComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HallRoutingModule { }
