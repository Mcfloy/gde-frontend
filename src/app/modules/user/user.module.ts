import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { MockUserService } from 'src/app/core/mocks/mock.user.service';
import { MockRankService } from 'src/app/core/mocks/mock.rank.service';
import { MockGuardService } from 'src/app/core/mocks/mock.guard.service';
import { MockRibbonService } from 'src/app/core/mocks/mock.ribbon.service';
import { MockMedalService } from 'src/app/core/mocks/mock.medal.service';
import { MockDecorationService } from 'src/app/core/mocks/mock.decoration.service';

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
    { provide: 'RibbonService', useClass: MockRibbonService },
    { provide: 'MedalService', useClass: MockMedalService },
    { provide: 'DecorationService', useClass: MockDecorationService }
  ]
})
export class UserModule { }
