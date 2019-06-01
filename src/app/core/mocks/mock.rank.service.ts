import { RankService } from 'src/app/shared/services/rank.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Rank } from 'src/app/shared/models/rank';

@Injectable()
export class MockRankService implements RankService {
  private id = 1;

  private readonly mockedRanks: Rank[] = [{
    id: this.getGeneratedId(), // 1
    guardId: 1,
    name: null,
    position: 1
  }, {
    id: this.getGeneratedId(),
    guardId: 2,
    name: 'Général en chef',
    position: 1,
  }, {
    id: this.getGeneratedId(),
    guardId: 2,
    name: 'Général',
    position: 2,
  }, {
    id: this.getGeneratedId(),
    guardId: 2,
    name: 'Adjudant-commandant',
    position: 3,
  }, {
    id: this.getGeneratedId(), // 5
    guardId: 3,
    name: 'Colonel',
    position: 1,
  }, {
    id: this.getGeneratedId(),
    guardId: 3,
    name: 'Lieutenant colonel',
    position: 2,
  }, {
    id: this.getGeneratedId(),
    guardId: 3,
    name: 'Major',
    position: 3,
  }, {
    id: this.getGeneratedId(),
    guardId: 3,
    name: 'Chef de bataillon',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 4,
    name: 'Capitaine',
    position: 1,
  }, {
    id: this.getGeneratedId(), // 10
    guardId: 4,
    name: 'Lieutenant',
    position: 2,
  }, {
    id: this.getGeneratedId(),
    guardId: 4,
    name: 'Sous-Lieutenant',
    position: 3,
  }, {
    id: this.getGeneratedId(),
    guardId: 4,
    name: 'Aspirant',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 5,
    name: 'Adjudant',
    position: 1,
  }, {
    id: this.getGeneratedId(),
    guardId: 5,
    name: 'Sergent-Major',
    position: 2,
  }, {
    id: this.getGeneratedId(), // 15
    guardId: 5,
    name: 'Sergent',
    position: 3,
  }, {
    id: this.getGeneratedId(),
    guardId: 5,
    name: 'Brigadier',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 5,
    name: 'Gendarme',
    position: 5,
  }, {
    id: this.getGeneratedId(),
    guardId: 6,
    name: 'Caporal des Grenadiers',
    position: 1,
  }, {
    id: this.getGeneratedId(),
    guardId: 6,
    name: 'Garde d\'honneur',
    position: 2,
  }, {
    id: this.getGeneratedId(), // 20
    guardId: 6,
    name: 'Grenadier première classe',
    position: 3,
  }, {
    id: this.getGeneratedId(),
    guardId: 6,
    name: 'Grenadier seconde classe',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 7,
    name: 'Caporal des Chasseurs',
    position: 1,
  }, {
    id: this.getGeneratedId(),
    guardId: 7,
    name: 'Voltigeur',
    position: 2,
  }, {
    id: this.getGeneratedId(),
    guardId: 7,
    name: 'Chasseur première classe',
    position: 3,
  }, {
    id: this.getGeneratedId(), // 25
    guardId: 7,
    name: 'Chasseur seconde classe',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 8,
    name: 'Caporal de la Moyenne Garde',
    position: 1,
  }, {
    id: this.getGeneratedId(),
    guardId: 8,
    name: 'Vélite première classe',
    position: 2,
  }, {
    id: this.getGeneratedId(),
    guardId: 8,
    name: 'Dragon à pied première classe',
    position: 2,
  }, {
    id: this.getGeneratedId(),
    guardId: 8,
    name: 'Vélite seconde classe',
    position: 3,
  }, {
    id: this.getGeneratedId(), // 30
    guardId: 8,
    name: 'Dragon à pied seconde classe',
    position: 3,
  }, {
    id: this.getGeneratedId(),
    guardId: 8,
    name: 'Flanqueur chasseur',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 8,
    name: 'Flanqueur grenadier',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 11,
    name: 'Caporal de la Jeune Garde',
    position: 1,
  }, {
    id: this.getGeneratedId(),
    guardId: 11,
    name: 'Carabinier',
    position: 2,
  }, {
    id: this.getGeneratedId(), // 35
    guardId: 11,
    name: 'Fusilier',
    position: 3,
  }, {
    id: this.getGeneratedId(),
    guardId: 11,
    name: 'Recrue',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 10,
    name: 'Aide de camp',
    position: 1,
  }, {
    id: this.getGeneratedId(),
    guardId: 10,
    name: 'Chef Auxiliaire',
    position: 2,
  }, {
    id: this.getGeneratedId(),
    guardId: 10,
    name: 'Auxiliaire première classe',
    position: 3,
  }, {
    id: this.getGeneratedId(), // 40
    guardId: 10,
    name: 'Auxiliaire seconde classe',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 10,
    name: 'Aspirant auxiliaire',
    position: 5,
  }, {
    id: this.getGeneratedId(),
    guardId: 10,
    name: 'Elève auxiliaire',
    position: 6,
  }, {
    id: this.getGeneratedId(),
    guardId: 9,
    name: 'Chef de Batterie',
    position: 1,
  }, {
    id: this.getGeneratedId(), // 45
    guardId: 9,
    name: 'Canonnier Vétéran',
    position: 2,
  }, {
    id: this.getGeneratedId(),
    guardId: 9,
    name: 'Canonnier première classe',
    position: 3,
  }, {
    id: this.getGeneratedId(),
    guardId: 9,
    name: 'Canonnier seconde classe',
    position: 4,
  }, {
    id: this.getGeneratedId(),
    guardId: 9,
    name: 'Servant d\'artillerie première classe',
    position: 5,
  }, {
    id: this.getGeneratedId(),
    guardId: 9,
    name: 'Servent d\'artillerie seconde classe',
    position: 6,
  }];

  private getGeneratedId () {
    return this.id++;
  }

  all (): Observable<Rank[]> {
    return of(this.mockedRanks);
  }
  get (id: any): Observable<Rank> {
    const foundRank = this.mockedRanks.find(rank => rank.id === parseInt(id.toString(), 10));
    if (foundRank) {
      return of(foundRank);
    }
    throw new Error('Rank not found with id=' + id);
  }
  post (rank: Rank): Observable<Rank> {
    if (!rank || rank.id) {
      throw new Error('Bad request, rank null or id is not null');
    }
    rank.id = this.getGeneratedId();
    this.mockedRanks.push(rank);
    return of(rank);
  }
  put (updatedRank: Rank): Observable<Rank> {
    if (!updatedRank) {
      throw new Error('Bad request, rank is null or undefined.');
    }
    const foundIndex = this.mockedRanks.findIndex(rank => rank.id === updatedRank.id);
    if (foundIndex) {
      this.mockedRanks[foundIndex] = updatedRank;
      return of(updatedRank);
    }
    throw new Error('Rank not found with id=' + updatedRank.id);
  }
  delete (id: any): Observable<boolean> {
    if (!id) {
      throw new Error('Bad request, no id.');
    }
    const foundIndex = this.mockedRanks.findIndex(rank => rank.id === parseInt(id.toString(), 10));
    if (foundIndex) {
      delete this.mockedRanks[foundIndex];
      return of(true);
    }
    throw new Error('Rank not found with id=' + id);
  }
}
