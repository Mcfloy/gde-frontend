import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { AppStorage, StorageKey } from 'src/app/shared/utils/app.storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultUserService implements UserService {

  constructor (private readonly http: HttpClient) {}

  private readonly BASE_URL: string = AppStorage.get(StorageKey.API_URL);

  private getURL () {
    return `${this.BASE_URL}/users`;
  }

  private getURLForId (id: number) {
    return `${this.getURL()}/${id}`;
  }

  all (): Observable<User[]> {
    return this.http.get<User[]>(this.getURL());
  }
  get (id: any): Observable<User> {
    return this.http.get<User>(this.getURLForId(id));
  }
  post (user: User): Observable<User> {
    return this.http.post<User>(this.getURL(), user);
  }
  put (updatedUser: User): Observable<User> {
    return this.http.put<User>(this.getURLForId(updatedUser.id), updatedUser);
  }
  delete (id: any): Observable<boolean> {
    return this.http.delete(this.getURLForId(id), {
      observe: 'response'
    }).pipe(
      map(data => data.ok)
    );
  }
}
