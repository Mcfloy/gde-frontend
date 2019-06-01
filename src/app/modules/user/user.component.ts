import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { Rank } from 'src/app/shared/models/rank';
import { Exploit } from 'src/app/shared/models/exploit';
import { RankService } from 'src/app/shared/services/rank.service';
import { Guard } from 'src/app/shared/models/guard';
import { GuardService } from 'src/app/shared/services/guard.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  rank: Rank;
  guard: Guard;
  exploits: Exploit[];

  constructor (
    @Inject('UserService') private readonly userService: UserService,
    @Inject('RankService') private readonly rankService: RankService,
    @Inject('GuardService') private readonly guardService: GuardService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit () {
    this.loadUser(this.route.snapshot.params.id);
  }

  async loadUser (id) {
    try {
      this.user = await this.userService.get(id).toPromise();
    } catch (err) {
      // TODO: Add a logger for improved debug
      console.error(err);
      this.router.navigateByUrl('/regiment');
    }
    try {
      this.rank = await this.rankService.get(this.user.rankId).toPromise();
    } catch (err) {
      // TODO: Add a logger for improved debug
      console.error(err);
      this.router.navigateByUrl('/regiment');
    }
    try {
      this.guard = await this.guardService.get(this.rank.guardId).toPromise();
    } catch (err) {
      // TODO: Add a logger for improved debug
      console.error(err);
      this.router.navigateByUrl('/regiment');
    }
  }

}
