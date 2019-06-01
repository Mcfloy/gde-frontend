import { Component, OnInit, Inject } from '@angular/core';
import { Guard } from 'src/app/shared/models/guard';
import { Rank } from 'src/app/shared/models/rank';
import { User } from 'src/app/shared/models/user';
import { GuardService } from 'src/app/shared/services/guard.service';
import { RankService } from 'src/app/shared/services/rank.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-regiment',
  templateUrl: './regiment.component.html',
  styleUrls: ['./regiment.component.scss']
})
export class RegimentComponent implements OnInit {

  positions: Set<number>;
  guards: Guard[] = [];
  ranks: Rank[] = [];
  users: (User & { guardId: number })[] = [];

  constructor (
    @Inject('GuardService') private readonly guardService: GuardService,
    @Inject('RankService') private readonly rankService: RankService,
    @Inject('UserService') private readonly userService: UserService
  ) { }

  ngOnInit () {
    this.loadData();
  }

  async loadData () {
    this.guards = await this.guardService.all().toPromise();
    this.positions = new Set(this.guards.map(guard => guard.position));
    this.ranks = await this.rankService.all().toPromise();
    this.users = (await this.userService.all().toPromise()).map(user => {
      return {
        ...user,
        guardId: this.ranks.find(rank => rank.id === parseInt(user.rankId.toString(), 10)).guardId
      };
    });
  }

  getGuardsWithPosition (position: number) {
    return this.guards.filter(guard => guard.position === parseInt(position.toString(), 10));
  }

  getUsersOfGuard (guardId: number) {
    return this.users.filter(user => user.guardId === parseInt(guardId.toString(), 10));
  }

}
