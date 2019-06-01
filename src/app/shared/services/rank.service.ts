import { Observable } from 'rxjs';
import { Rank } from '../models/rank';

export interface RankService {
  all (): Observable<Rank[]>;

  get (id): Observable<Rank>;

  post (rank: Rank): Observable<Rank>;

  put (updatedRank: Rank): Observable<Rank>;

  delete (id): Observable<boolean>;
}
