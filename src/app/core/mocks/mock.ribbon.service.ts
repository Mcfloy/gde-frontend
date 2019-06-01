import { RibbonService } from 'src/app/shared/services/ribbon.service';
import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ribbon } from 'src/app/shared/models/Ribbon';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable()
export class MockRibbonService implements RibbonService {
  private id = 1;

  private readonly mockedRibbons: Ribbon[] = [{
    id: this.getGeneratedId(),
    categoryId: 1,
    description: 'Avoir tous les rubans disponibles',
    name: 'Numéro 1',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 2,
    description: 'Faire un tir au mousquet à 300 mètres en LB',
    name: 'Maitre Tirailleur',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 2,
    description: 'Faire un tir au mousquet à 200 mètres en LB',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 2,
    description: 'Faire un tir au mousquet à 150 mètres en LB',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 3,
    description: 'Faire un tir au pistolet à 150 mètres en LB',
    name: 'Maitre tireur',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 3,
    description: 'Faire un tir au pistolet à 100 mètres en LB',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 3,
    description: 'Faire un tir au pistolet à 60 mètres en LB',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 6,
    description: 'Avoir recruté 13 personnes',
    name: 'Recruteur vétéran',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 6,
    description: 'Avoir recruté 8 personnes',
    name: 'Recruteur expérimenté',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 6,
    description: 'Avoir recruté 5 personnes',
    name: 'Recruteur novice',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 7,
    description: 'Faire 11 morts au canon en LB',
    name: 'Canonnier expert',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 7,
    description: 'Faire 7 morts au canon en LB',
    name: 'Canonnier expérimenté',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 7,
    description: 'Faire 4 morts au canon en LB',
    name: 'Canonnier novice',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 4,
    description: 'Faire 12 morts à la baïonnette en LB',
    name: 'Maitre planteur',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 4,
    description: 'Faire 7 morts à la baïonnette en LB',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 4,
    description: 'Faire 5 morts à la baïonnette en LB',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 8,
    description: 'Faire 20 morts sans mourir',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 8,
    description: 'Faire 15 morts sans mourir',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 8,
    description: 'Mourir 30 fois en une partie',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 5,
    description: 'Faire 7 morts au sabre en LB',
    name: 'Maitre sabreur',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 5,
    description: 'Faire 5 morts au sabre en LB',
    name: '',
    imageURL: ''
  }, {
    id: this.getGeneratedId(),
    categoryId: 5,
    description: 'Faire 3 morts au sabre en LB',
    name: '',
    imageURL: ''
  }];

  private getGeneratedId () {
    return this.id++;
  }

  all (): Observable<Ribbon[]> {
    return of(this.mockedRibbons);
  }

  get (id: number): Observable<Ribbon> {
    const foundRibbon = this.mockedRibbons.find(ribbon => ribbon.id === parseInt(id.toString(), 10));
    if (foundRibbon) {
      return of(foundRibbon);
    }
    throw new Error('Ribbon not found with id=' + id);
  }

  post (ribbon: Ribbon): Observable<Ribbon> {
    throw new Error('Method not implemented.');
  }

  put (updatedRibbon: Ribbon): Observable<Ribbon> {
    throw new Error('Method not implemented.');
  }

  delete (id: number): Observable<Ribbon> {
    throw new Error('Method not implemented.');
  }
}
