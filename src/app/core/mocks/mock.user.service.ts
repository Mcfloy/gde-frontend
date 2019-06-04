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
    decorationIds: [5, 2, 3, 4, 19],
    medalIds: [4, 5]
  }, {
    id: this.getGeneratedId(),
    name: 'Adj | Omegatho',
    rankId: 13,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/260487794017828864/3e9fea2d9d6e10e76d024bcc178a3d4b.png?size=128',
    ribbonIds: [2, 3, 4],
    decorationIds: [10, 12],
    medalIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.2 | Eugène Deflandre',
    rankId: 25,
    discordId: 132756503936499713,
    avatar: 'https://cdn.discordapp.com/avatars/132756503936499713/74201ef002d680674ebf76da1df7edfb.webp?size=128',
    ribbonIds: [3, 4],
    medalIds: [6],
    decorationIds: [2, 3]
  }, {
    id: this.getGeneratedId(),
    name: 'Chan | Artman',
    rankId: 49,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/397834761177006091/a08e5548c6509608ede2a0f92addc2da.png?size=128',
    ribbonIds: [],
    medalIds: [4, 5, 15, 6, 2],
    decorationIds: [10, 2, 3, 4, 9, 11]
  }, {
    id: this.getGeneratedId(),
    name: 'Lt | Bredele',
    rankId: 10,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/201427607068213249/e2d6898570bef522160a9abaf28c04cb.png?size=128',
    ribbonIds: [],
    medalIds: [6, 5, 7],
    decorationIds: [2, 3, 4, 10, 11, 6, 7, 12]
  }, {
    id: this.getGeneratedId(),
    name: 'Sg-M | Baron Rouge',
    rankId: 14,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/203415826479579136/98f0a489dede2a24c82f39af8ff19989.png?size=128',
    ribbonIds: [],
    medalIds: [5, 6],
    decorationIds: [17, 18, 2, 3, 4, 8]
  }, {
    id: this.getGeneratedId(),
    name: 'Ged | Daniel',
    rankId: 17,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/332814631213203457/79b6f0d5dec1792c28aeae3b9342bec6.png?size=128',
    ribbonIds: [],
    medalIds: [6],
    decorationIds: [2, 3, 4, 10, 11, 12]
  }, {
    id: this.getGeneratedId(),
    name: 'Sgt | TheTheCrack',
    rankId: 15,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/203415826479579136/98f0a489dede2a24c82f39af8ff19989.png?size=128',
    ribbonIds: [],
    medalIds: [6],
    decorationIds: [2, 3, 4, 11, 12]
  }, {
    id: this.getGeneratedId(),
    name: 'Bri | Odeb Flantier',
    rankId: 16,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/391993268725874688/9e4f60c7deab4ab9e099b0b6405aef1b.png?size=128',
    ribbonIds: [],
    medalIds: [6, 5],
    decorationIds: [2, 3, 4, 8]
  }, {
    id: this.getGeneratedId(),
    name: 'Bri | Groot',
    rankId: 16,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/175749875173031936/a359b9e692eae2e96caf3e46e9dc7471.png?size=128',
    ribbonIds: [],
    medalIds: [6, 5, 7],
    decorationIds: [1, 2, 3, 4, 6, 15]
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.Aux | Spitch',
    rankId: 38,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/292419058287247360/4aa68cb2002b8189ded296071f9453d1.png?size=128',
    ribbonIds: [],
    medalIds: [6, 5],
    decorationIds: [1]
  }, {
    id: this.getGeneratedId(),
    name: 'Gr 2 | Thit',
    rankId: 21,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/381123325482762241/d227a30cd546adce817c49775005bf48.png?size=128',
    ribbonIds: [],
    medalIds: [5],
    decorationIds: [10]
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.1 | Faiseur de veuve-Don',
    rankId: 21,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/246695808114622464/e4519cd4e9750a48cb61725a9bfbda2d.png?size=128',
    ribbonIds: [],
    medalIds: [5, 7],
    decorationIds: []
  }, {
    id: this.getGeneratedId(),
    name: 'Cem | Le Gecko',
    rankId: 50,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/310515352150999042/8045238a0a28be3faaaa07f5fbd71a27.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [2, 3, 4, 7, 19]
  }, {
    id: this.getGeneratedId(),
    name: 'ChB | Darin',
    rankId: 8,
    discordId: 0,
    avatar: 'https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [10, 11, 12]
  }, {
    id: this.getGeneratedId(),
    name: 'GH | Franck La Forge',
    rankId: 19,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/164874507570511872/498c0771717993362b123e79276d00ff.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [10, 11, 12]
  }, {
    id: this.getGeneratedId(),
    name: 'Vel.2 | Arthy',
    rankId: 29,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/173061664256557057/5f0b0f0fa19ae53e992153774f59da50.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [10, 11, 12]
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.1 | P\'tit cafard',
    rankId: 24,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/335828193854488576/5fa8adedd9f6da1a82040775110e542d.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [17, 18]
  }, {
    id: this.getGeneratedId(),
    name: 'Fsl | carabinier-gentilhomme',
    rankId: 35,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/296328058280083458/31577c04b940e88bf897b2905c733e24.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [1]
  }, {
    id: this.getGeneratedId(),
    name: 'Gr.2 | Pepito',
    rankId: 21,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/138396519928823808/4189f527ce2e8d8b344ea948483506f3.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [16]
  }, {
    id: this.getGeneratedId(),
    name: 'Dra 1 | Méléagant',
    rankId: 28,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/310717415812104193/3e86d205d09e4afb53e445ad90cb1c34.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [1]
  }, {
    id: this.getGeneratedId(),
    name: 'Vel 2 | Tomcanon',
    rankId: 29,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/330766002734366721/ceac27e95e0f0ebc4f7e73c8aaab2b0b.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [18]
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.2 | Plankton',
    rankId: 25,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/247058026564026368/fc7d4a135c8420d1b57df892690d749f.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [18]
  }, {
    id: this.getGeneratedId(),
    name: 'Vel 1 | Le grognard',
    rankId: 25,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/391511915828084737/a36d836a7fc5247f94d7cdeed23074d9.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [18]
  }, {
    id: this.getGeneratedId(),
    name: 'Asp.Aux | Paul Butet',
    rankId: 41,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/370980697675923456/c386efc5a6475c28874ae9cc83cb3e17.png?size=128',
    ribbonIds: [],
    medalIds: [],
    decorationIds: [1]
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
