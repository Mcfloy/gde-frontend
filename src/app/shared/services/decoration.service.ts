import { Observable } from 'rxjs';
import { Decoration } from '../models/decoration';

export interface DecorationService {
  all (): Observable<Decoration[]>;

  get (id: number): Observable<Decoration>;
}
