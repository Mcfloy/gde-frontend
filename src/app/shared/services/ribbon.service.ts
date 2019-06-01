import { Observable } from 'rxjs';
import { Ribbon } from '../models/Ribbon';

export interface RibbonService {
  all (): Observable<Ribbon[]>;

  get (id: number): Observable<Ribbon>;

  post (ribbon: Ribbon): Observable<Ribbon>;

  put (updatedRibbon: Ribbon): Observable<Ribbon>;

  delete (id: number): Observable<Ribbon>;
}
