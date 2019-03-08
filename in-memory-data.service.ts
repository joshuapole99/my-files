import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'National Security' },
      { id: 2, name: 'Boyz In The Hood' },
      { id: 3, name: 'Deadpool' },
      { id: 4, name: 'StarWars' },
      { id: 5, name: 'Friday' },
      { id: 6, name: 'Scary Movie' },
      { id: 7, name: 'Black Panther' },
      { id: 8, name: 'Taken' },
      { id: 9, name: 'The Fugitve' },
      { id: 10, name: 'Training Day' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
