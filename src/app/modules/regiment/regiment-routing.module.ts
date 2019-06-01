import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegimentComponent } from './regiment.component';

const routes: Route[] = [
  { path: '', component: RegimentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegimentRoutingModule { }
