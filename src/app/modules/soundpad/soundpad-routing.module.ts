import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SoundpadComponent } from './soundpad.component';

const routes: Route[] = [
  { path: '', component: SoundpadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoundpadRoutingModule { }
