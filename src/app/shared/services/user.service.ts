import { Observable } from 'rxjs';
import { User } from '../models/user';

export interface UserService {
  all (filters?: any[]): Observable<User[]>;

  get (id: number): Observable<User>;

  // No post as only the Omegabot can generate the user.

  put (updatedUser: User): Observable<User>;

}
