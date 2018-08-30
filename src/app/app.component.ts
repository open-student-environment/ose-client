import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';

import { GraphService } from './services/graph.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

const ADJ = {
  '1': [ 7,  2,  6],
  '2': [ 8,  3,  1],
  '3': [ 4,  2,  9],
  '4': [10,  3,  5],
  '5': [ 6,  4, 11],
  '6': [ 1,  5, 12],
  '7': [ 1, 20, 13],
  '8': [ 2, 14, 21],
  '9': [ 3, 22, 15],
 '10': [ 4, 16, 23],
 '11': [ 5, 17, 24],
 '12': [ 6, 19, 18],
 '13': [ 7, 19],
 '14': [20,  8],
 '15': [21,  9],
 '16': [22, 10],
 '17': [23, 11],
 '18': [24, 12],
 '19': [12, 13],
 '20': [14,  7],
 '21': [ 8, 15],
 '22': [ 9, 16],
 '23': [10, 17],
 '24': [11, 18]
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  adjacency$ = this.graphService.adjacency$;
  filteredAdjacency$ = this.graphService.filteredAdjacency$;

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit() {
    this.graphService.getAdjacency().subscribe();
  }

  filterAdjacency() {
    this.graphService.filterAdjacency(['0700866L']);
  }
}
