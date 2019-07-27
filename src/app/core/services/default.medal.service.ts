import { MedalService } from 'src/app/shared/services/medal.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medal } from 'src/app/shared/models/medal';
import { AppStorage, StorageKey } from 'src/app/shared/utils/app.storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultMedalService implements MedalService {

  constructor (private readonly http: HttpClient) {}

  private readonly BASE_URL: string = AppStorage.get(StorageKey.API_URL);

  private getURL () {
    return `${this.BASE_URL}/medals`;
  }

  private getURLForId (id: number) {
    return `${this.getURL()}/${id}`;
  }

  all (): Observable<Medal[]> {
    return this.http.get<Medal[]>(this.getURL());
  }
  get (id: any): Observable<Medal> {
    return this.http.get<Medal>(this.getURLForId(id));
  }
  post (medal: Medal): Observable<Medal> {
    return this.http.post<Medal>(this.getURL(), medal);
  }
  put (updatedMedal: Medal): Observable<Medal> {
    return this.http.put<Medal>(this.getURLForId(updatedMedal.id), updatedMedal);
  }
  delete (id: any): Observable<boolean> {
    return this.http.delete(this.getURLForId(id), {
      observe: 'response'
    }).pipe(
      map(data => data.ok)
    );
  }
}
