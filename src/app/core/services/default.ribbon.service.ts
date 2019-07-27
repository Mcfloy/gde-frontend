import { RibbonService } from 'src/app/shared/services/ribbon.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ribbon } from 'src/app/shared/models/ribbon';
import { AppStorage, StorageKey } from 'src/app/shared/utils/app.storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultRibbonService implements RibbonService {

  constructor (private readonly http: HttpClient) {}

  private readonly BASE_URL: string = AppStorage.get(StorageKey.API_URL);

  private getURL () {
    return `${this.BASE_URL}/ribbons`;
  }

  private getURLForId (id: number) {
    return `${this.getURL()}/${id}`;
  }

  all (): Observable<Ribbon[]> {
    return this.http.get<Ribbon[]>(this.getURL());
  }
  get (id: any): Observable<Ribbon> {
    return this.http.get<Ribbon>(this.getURLForId(id));
  }
  post (ribbon: Ribbon): Observable<Ribbon> {
    return this.http.post<Ribbon>(this.getURL(), ribbon);
  }
  put (updatedRibbon: Ribbon): Observable<Ribbon> {
    return this.http.put<Ribbon>(this.getURLForId(updatedRibbon.id), updatedRibbon);
  }
  delete (id: any): Observable<boolean> {
    return this.http.delete(this.getURLForId(id), {
      observe: 'response'
    }).pipe(
      map(data => data.ok)
    );
  }
}
