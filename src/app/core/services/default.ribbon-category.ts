import { RibbonCategoryService } from 'src/app/shared/services/ribbon-category.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RibbonCategory } from 'src/app/shared/models/ribbon-category';
import { AppStorage, StorageKey } from 'src/app/shared/utils/app.storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultRibbonCategoryService implements RibbonCategoryService {

  constructor (private readonly http: HttpClient) {}

  private readonly BASE_URL: string = AppStorage.get(StorageKey.API_URL);

  private getURL () {
    return `${this.BASE_URL}/ribbon-categories`;
  }

  private getURLForId (id: number) {
    return `${this.getURL()}/${id}`;
  }

  all (): Observable<RibbonCategory[]> {
    return this.http.get<RibbonCategory[]>(this.getURL());
  }
  get (id: any): Observable<RibbonCategory> {
    return this.http.get<RibbonCategory>(this.getURLForId(id));
  }
  post (ribbonCategory: RibbonCategory): Observable<RibbonCategory> {
    return this.http.post<RibbonCategory>(this.getURL(), ribbonCategory);
  }
  put (updatedRibbonCategory: RibbonCategory): Observable<RibbonCategory> {
    return this.http.put<RibbonCategory>(this.getURLForId(updatedRibbonCategory.id), updatedRibbonCategory);
  }
  delete (id: any): Observable<boolean> {
    return this.http.delete(this.getURLForId(id), {
      observe: 'response'
    }).pipe(
      map(data => data.ok)
    );
  }
}
