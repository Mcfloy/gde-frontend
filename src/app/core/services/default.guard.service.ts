import { GuardService } from 'src/app/shared/services/guard.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guard } from 'src/app/shared/models/guard';
import { AppStorage, StorageKey } from 'src/app/shared/utils/app.storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultGuardService implements GuardService {

  constructor (private readonly http: HttpClient) {}

  private readonly BASE_URL: string = AppStorage.get(StorageKey.API_URL);

  private getURL () {
    return `${this.BASE_URL}/guards`;
  }

  private getURLForId (id: number) {
    return `${this.getURL()}/${id}`;
  }

  all (): Observable<Guard[]> {
    return this.http.get<Guard[]>(this.getURL());
  }
  get (id: any): Observable<Guard> {
    return this.http.get<Guard>(this.getURLForId(id));
  }
  post (guard: Guard): Observable<Guard> {
    return this.http.post<Guard>(this.getURL(), guard);
  }
  put (updatedGuard: Guard): Observable<Guard> {
    return this.http.put<Guard>(this.getURLForId(updatedGuard.id), updatedGuard);
  }
  delete (id: any): Observable<boolean> {
    return this.http.delete(this.getURLForId(id), {
      observe: 'response'
    }).pipe(
      map(data => data.ok)
    );
  }
}
