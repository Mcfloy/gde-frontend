import { Observable } from 'rxjs';
import { Medal } from '../models/medal';

export interface MedalService {
  all (): Observable<Medal[]>;

  get (id: number): Observable<Medal>;
}
