import { Observable } from 'rxjs';
import { Guard } from '../models/guard';

export interface GuardService {
  all (): Observable<Guard[]>;

  get (id): Observable<Guard>;

  post (guard: Guard): Observable<Guard>;

  put (updatedGuard: Guard): Observable<Guard>;

  delete (id): Observable<boolean>;
}
