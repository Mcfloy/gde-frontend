import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';

const routes: Route[] = [
  { path: '', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
