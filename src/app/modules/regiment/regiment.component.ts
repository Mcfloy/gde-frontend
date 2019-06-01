import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regiment',
  templateUrl: './regiment.component.html',
  styleUrls: ['./regiment.component.scss']
})
export class RegimentComponent implements OnInit {

  items = [{
    name: 'Persess',
    avatarUrl: 'https://cdn.discordapp.com/avatars/308958114588131328/d8c00316872ff89abfc7a2b6ceb7aa50.webp?size=128'
  }, {
    name: 'Eugène Deflandre',
    avatarUrl: 'https://cdn.discordapp.com/avatars/132756503936499713/74201ef002d680674ebf76da1df7edfb.webp?size=128'
  }];

  constructor () { }

  ngOnInit () {
  }

}
