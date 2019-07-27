import { RankService } from 'src/app/shared/services/rank.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rank } from 'src/app/shared/models/rank';
import { AppStorage, StorageKey } from 'src/app/shared/utils/app.storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultRankService implements RankService {

  constructor (private readonly http: HttpClient) {}

  private readonly BASE_URL: string = AppStorage.get(StorageKey.API_URL);

  private getURL () {
    return `${this.BASE_URL}/ranks`;
  }

  private getURLForId (id: number) {
    return `${this.getURL()}/${id}`;
  }

  all (): Observable<Rank[]> {
    return this.http.get<Rank[]>(this.getURL());
  }
  get (id: any): Observable<Rank> {
    return this.http.get<Rank>(this.getURLForId(id));
  }
  post (rank: Rank): Observable<Rank> {
    return this.http.post<Rank>(this.getURL(), rank);
  }
  put (updatedRank: Rank): Observable<Rank> {
    return this.http.put<Rank>(this.getURLForId(updatedRank.id), updatedRank);
  }
  delete (id: any): Observable<boolean> {
    return this.http.delete(this.getURLForId(id), {
      observe: 'response'
    }).pipe(
      map(data => data.ok)
    );
  }
}
