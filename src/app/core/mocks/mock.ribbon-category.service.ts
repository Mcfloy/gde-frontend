import { Injectable } from '@angular/core';
import { RibbonCategoryService } from 'src/app/shared/services/ribbon-category.service';
import { Observable, of } from 'rxjs';
import { RibbonCategory } from 'src/app/shared/models/ribbon-category';

@Injectable()
export class MockRibbonCategoryService implements RibbonCategoryService {
  private readonly mockedRibbonCategories: RibbonCategory[] = [{
    id: 1,
    name: 'Maitre'
  }, {
    id: 2,
    name: 'Tir au mousquet'
  }, {
    id: 3,
    name: 'Tir au pistolet'
  }, {
    id: 4,
    name: 'Corps-à-corps à la baïonnette'
  }, {
    id: 5,
    name: 'Corps-à-corps au sabre'
  }, {
    id: 6,
    name: 'Recrutement'
  }, {
    id: 7,
    name: 'Tir au canon'
  }, {
    id: 8,
    name: 'Survivant'
  }];

  all (): Observable<RibbonCategory[]> {
    return of(this.mockedRibbonCategories);
  }
  get (id: number): Observable<RibbonCategory> {
    const foundCategory = this.mockedRibbonCategories.find(category => category.id === parseInt(id.toString(), 10));
    if (foundCategory) {
      return of(foundCategory);
    }
    throw new Error('Ribbon category not found with id=' + id);
  }
}
