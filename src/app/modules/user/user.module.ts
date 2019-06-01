import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { MockUserService } from 'src/app/core/mocks/mock.user.service';
import { MockRankService } from 'src/app/core/mocks/mock.rank.service';
import { MockGuardService } from 'src/app/core/mocks/mock.guard.service';
import { MockRibbonService } from 'src/app/core/mocks/mock.ribbon.service';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    { provide: 'UserService', useClass: MockUserService },
    { provide: 'RankService', useClass: MockRankService },
    { provide: 'GuardService', useClass: MockGuardService },
    { provide: 'RibbonService', useClass: MockRibbonService }
  ]
})
export class UserModule { }
