import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { MockRibbonService } from 'src/app/core/mocks/mock.ribbon.service';
import { MockMedalService } from 'src/app/core/mocks/mock.medal.service';
import { MockDecorationService } from 'src/app/core/mocks/mock.decoration.service';
import { DefaultGuardService } from 'src/app/core/services/default.guard.service';
import { DefaultRankService } from 'src/app/core/services/default.rank.service';
import { DefaultUserService } from 'src/app/core/services/default.user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    { provide: 'UserService', useClass: DefaultUserService },
    { provide: 'RankService', useClass: DefaultRankService },
    { provide: 'GuardService', useClass: DefaultGuardService },
    { provide: 'RibbonService', useClass: MockRibbonService },
    { provide: 'MedalService', useClass: MockMedalService },
    { provide: 'DecorationService', useClass: MockDecorationService }
  ]
})
export class UserModule { }
