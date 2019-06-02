import { Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class MockUserService implements UserService {
  private id = 1;
  private readonly mockedUsers: User[] = [{
    id: this.getGeneratedId(),
    name: 'Mar | Persess',
    rankId: 1,
    discordId: 308958114588131328,
    avatar: 'https://cdn.discordapp.com/avatars/308958114588131328/d8c00316872ff89abfc7a2b6ceb7aa50.webp?size=128',
    ribbonIds: [],
    decorationIds: [],
    medalIds: [4, 5]
  }, {
    id: this.getGeneratedId(),
    name: 'Adj | Omegatho',
    rankId: 13,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/260487794017828864/3e9fea2d9d6e10e76d024bcc178a3d4b.png?size=128',
    ribbonIds: [2, 3, 4],
    decorationIds: [],
    medalIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.2 | Eugène Deflandre',
    rankId: 25,
    discordId: 132756503936499713,
    avatar: 'https://cdn.discordapp.com/avatars/132756503936499713/74201ef002d680674ebf76da1df7edfb.webp?size=128',
    ribbonIds: [3, 4],
    medalIds: [6],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Chan | Artman',
    rankId: 49,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/397834761177006091/a08e5548c6509608ede2a0f92addc2da.png?size=128',
    ribbonIds: [],
    medalIds: [4, 5, 15, 6, 2],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Lt | Bredele',
    rankId: 10,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/397834761177006091/a08e5548c6509608ede2a0f92addc2da.png?size=128',
    ribbonIds: [],
    medalIds: [6, 5, 7],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Sg-M | Baron Rouge',
    rankId: 14,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/203415826479579136/98f0a489dede2a24c82f39af8ff19989.png?size=128',
    ribbonIds: [],
    medalIds: [5, 6],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Ged | Daniel',
    rankId: 17,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/332814631213203457/79b6f0d5dec1792c28aeae3b9342bec6.png?size=128',
    ribbonIds: [],
    medalIds: [6],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Sgt | TheTheCrack',
    rankId: 15,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/203415826479579136/98f0a489dede2a24c82f39af8ff19989.png?size=128',
    ribbonIds: [],
    medalIds: [6],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Bri | Odeb Flantier',
    rankId: 16,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/391993268725874688/9e4f60c7deab4ab9e099b0b6405aef1b.png?size=128',
    ribbonIds: [],
    medalIds: [6, 5],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Bri | Groot',
    rankId: 16,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/175749875173031936/a359b9e692eae2e96caf3e46e9dc7471.png?size=128',
    ribbonIds: [],
    medalIds: [6, 5, 7],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.Aux | Spitch',
    rankId: 38,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/292419058287247360/4aa68cb2002b8189ded296071f9453d1.png?size=128',
    ribbonIds: [],
    medalIds: [6, 5],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Gr 2 | Thit',
    rankId: 21,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/381123325482762241/d227a30cd546adce817c49775005bf48.png?size=128',
    ribbonIds: [],
    medalIds: [5],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.1 | Faiseur de veuve-Don',
    rankId: 21,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/246695808114622464/e4519cd4e9750a48cb61725a9bfbda2d.png?size=128',
    ribbonIds: [],
    medalIds: [5, 7],
    decorationIds: []
  }];

  private getGeneratedId () {
    return this.id++;
  }
  all (filters?: any[]): Observable<User[]> {
    return of(this.mockedUsers);
  }

  get (id: number): Observable<User> {
    const foundUser = this.mockedUsers.find(user => user.id === parseInt(id.toString(), 10));
    if (foundUser) {
      return of(foundUser);
    }
    throw new Error('User not found with id=' + id);
  }

  put (updatedUser: User): Observable<User> {
    if (!updatedUser) {
      throw new Error('Bad Request, user is null or undefined.');
    }
    const foundIndex = this.mockedUsers.findIndex(user => user.id === updatedUser.id);
    if (foundIndex) {
      this.mockedUsers[foundIndex] = updatedUser;
      return of(updatedUser);
    }
    throw new Error('User not found with id=' + updatedUser.id);
  }
}
