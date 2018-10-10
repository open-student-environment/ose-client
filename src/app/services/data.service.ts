import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb() {
    const nodes = [
      {
        name: 'Jean Charles',
        id: '490d099c-c558-438e-9e7e-0dca1f21d1d3',
        type: 'user:enseignant',
        indicators: {
          strength: 10,
          grit: 20,
          autonomy: 3
        }
      },
      {
        name: 'groupe 47716',
        id: '47716',
        type: 'groupe'
      },
      {
        name: 'classe 45653',
        id: '45653',
        type: 'classe'
      },
      {
        name: 'Patick Jamet',
        id: '2935f172-8a35-4953-a801-3bc6b50596d6',
        type: 'user:eleve',
        indicators: {
          strength: 10,
          grit: 2,
          autonomy: 10
        }
      },
      {
        name: 'Romain Pellen',
        id: '2935f172-8a35-4953-a801-3bc6b50596d6',
        type: 'user:eleve',
        indicators: {
          strength: 10,
          grit: 5,
          autonomy: 0
        },
      },
      {
        name: 'classe 60754',
        id: '60754',
        type: 'classe'
      },
      {
        name: 'Prof. Cimelli',
        id: 'b69b8e86-6e9d-4035-b951-0d36771ec8a3',
        type: 'user:enseignant',
        indicators: {
          strenght: 100
        }
      },
      {
        name: 'David Panou',
        id: '9e356fa3-14a3-4210-91a9-34834eef3415',
        type: 'user:eleve',
          indicators: {
            strength: 10,
            grit: 5,
            autonomy: 50
          },
      },
      {
          name: 'classe 64468',
          id: '64468',
          type: 'classe'
      },
      {
        name: 'Prof Bocquet',
        id: '40fc24db-73e0-4bed-a67c-cdf4e0f8826c',
        type: 'user:enseignant',
        indicators: {
          strength: 100,
          grit: 50,
          autonomy: 50
        },
      },
      {
        name: 'classe 141363',
        id: '141363',
        type: 'classe'
      },
      {
        name: 'Prof Guery',
        id: '663ec4fd-a9b9-4a4c-9b11-551948af6b5a',
        type: 'user:enseignant',
        indicators: {
          strength: 100,
          grit: 50,
          autonomy: 60
        },
      },
      {
        name: 'Mathilde Bras',
        id: '2890ebd9-1147-4f16-8a65-b7239bd54bd0',
        type: 'user:eleve',
        indicators: {
          strength: 100,
          grit: 100,
          autonomy: 100
        },
      },
      {
        name: 'Soizic',
        id: '5eb0a97d-d2ee-48a7-b975-aefa1cab73aa',
        type: 'user:eleve',
        indicators: {
          strength: 200,
          grit: 100,
          autonomy: 100
        },
      }
    ];
    return {nodes};
  }

    // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: any[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
