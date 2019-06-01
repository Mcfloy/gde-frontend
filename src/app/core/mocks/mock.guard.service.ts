import { Injectable } from '@angular/core';
import { GuardService } from 'src/app/shared/services/guard.service';
import { Observable, of } from 'rxjs';
import { Guard } from 'src/app/shared/models/guard';

@Injectable()
export class MockGuardService implements GuardService {
  private id = 1;

  private readonly mockedGuards: Guard[] = [{
    id: this.getGeneratedId(), // 1
    name: 'Maréchal d\'Empire',
    position: 1,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 2
    name: '★ Officiers généraux de la Garde Impériale ★',
    position: 2,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 3
    name: '✧ Officiers supérieurs de la Garde Impériale ✧',
    position: 3,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 4
    name: '◊ Officiers subalternes de la Garde Impériale ◊ ',
    position: 3,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 5
    name: 'Θ Sous-officiers de la Garde Impériale Θ',
    position: 3,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 6
    name: 'Grenadiers de la vieille Garde',
    position: 4,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 7
    name: '♜ Chasseurs de la Vieille Garde Impériale ♜',
    position: 4,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 8
    name: '⚔ Moyenne Garde Impériale ⚔',
    position: 5,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 9
    name: 'Artillerie de la Garde Impériale',
    position: 5,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 10
    name: 'Unité de support de la Garde Impériale',
    position: 5,
    referringOfficiers: []
  }, {
    id: this.getGeneratedId(), // 11
    name: '⌽ Jeune Garde Impériale ⌽',
    position: 6,
    referringOfficiers: []
  }];

  private getGeneratedId () {
    return this.id++;
  }

  all (): Observable<Guard[]> {
    return of(this.mockedGuards);
  }
  get (id: any): Observable<Guard> {
    const foundGuard = this.mockedGuards.find(guard => guard.id === parseInt(id.toString(), 10));
    if (foundGuard) {
      return of(foundGuard);
    }
    throw new Error('Guard not found with id=' + id);
  }
  post (guard: Guard): Observable<Guard> {
    if (!guard || guard.id) {
      throw new Error('Bad request, guard null or id is not null');
    }
    guard.id = this.getGeneratedId();
    this.mockedGuards.push(guard);
    return of(guard);
  }
  put (updatedGuard: Guard): Observable<Guard> {
    if (!updatedGuard) {
      throw new Error('Bad request, guard is null or undefined.');
    }
    const foundIndex = this.mockedGuards.findIndex(guard => guard.id === updatedGuard.id);
    if (foundIndex) {
      this.mockedGuards[foundIndex] = updatedGuard;
      return of(updatedGuard);
    }
    throw new Error('Guard not found with id=' + updatedGuard.id);
  }
  delete (id: number): Observable<boolean> {
    if (!id) {
      throw new Error('Bad request, no id.');
    }
    const foundIndex = this.mockedGuards.findIndex(guard => guard.id === parseInt(id.toString(), 10));
    if (foundIndex) {
      delete this.mockedGuards[foundIndex];
      return of(true);
    }
    throw new Error('Guard not found with id=' + id);
  }
}
