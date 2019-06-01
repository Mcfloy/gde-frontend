import { RibbonCategory } from '../models/ribbon-category';
import { Observable } from 'rxjs';

export interface RibbonCategoryService {
  all (): Observable<RibbonCategory[]>;

  get (id: number): Observable<RibbonCategory>;
}
