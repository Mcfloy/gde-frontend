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
    avatar: 'https://cdn.discordapp.com/avatars/308958114588131328/d8c00316872ff89abfc7a2b6ceb7aa50.webp?size=128'
  }, {
    id: this.getGeneratedId(),
    name: 'Adj | Omegatho',
    rankId: 13,
    discordId: 0,
    avatar: 'https://cdn.discordapp.com/avatars/308958114588131328/d8c00316872ff89abfc7a2b6ceb7aa50.webp?size=128'
  }, {
    id: this.getGeneratedId(),
    name: 'Ch.2 | Eugène Deflandre',
    rankId: 25,
    discordId: 132756503936499713,
    avatar: 'https://cdn.discordapp.com/avatars/132756503936499713/74201ef002d680674ebf76da1df7edfb.webp?size=128'
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
