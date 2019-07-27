import { DecorationService } from 'src/app/shared/services/decoration.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Decoration } from 'src/app/shared/models/decoration';
import { AppStorage, StorageKey } from 'src/app/shared/utils/app.storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultDecorationService implements DecorationService {

  constructor (private readonly http: HttpClient) {}

  private readonly BASE_URL: string = AppStorage.get(StorageKey.API_URL);

  private getURL () {
    return `${this.BASE_URL}/decorations`;
  }

  private getURLForId (id: number) {
    return `${this.getURL()}/${id}`;
  }

  all (): Observable<Decoration[]> {
    return this.http.get<Decoration[]>(this.getURL());
  }
  get (id: any): Observable<Decoration> {
    return this.http.get<Decoration>(this.getURLForId(id));
  }
  post (decoration: Decoration): Observable<Decoration> {
    return this.http.post<Decoration>(this.getURL(), decoration);
  }
  put (updatedDecoration: Decoration): Observable<Decoration> {
    return this.http.put<Decoration>(this.getURLForId(updatedDecoration.id), updatedDecoration);
  }
  delete (id: any): Observable<boolean> {
    return this.http.delete(this.getURLForId(id), {
      observe: 'response'
    }).pipe(
      map(data => data.ok)
    );
  }
}
