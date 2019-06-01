import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimentComponent } from './regiment.component';
import { RegimentRoutingModule } from './regiment-routing.module';
import { MaterialModule } from 'src/app/shared/libs/material/material.module';
import { MockGuardService } from 'src/app/core/mocks/mock.guard.service';
import { MockRankService } from 'src/app/core/mocks/mock.rank.service';
import { MockUserService } from 'src/app/core/mocks/mock.user.service';

@NgModule({
  declarations: [RegimentComponent],
  imports: [
    CommonModule,
    RegimentRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: 'GuardService', useClass: MockGuardService },
    { provide: 'RankService', useClass: MockRankService },
    { provide: 'UserService', useClass: MockUserService }
  ]
})
export class RegimentModule { }
