import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  adjacency = {};
  adjacency$ = new BehaviorSubject<any>(this.adjacency);

  filteredAdjacency = {};
  filteredAdjacency$ = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient
  ) { }

  getAdjacency() {
    const url = 'http://localhost:5000/adjancy';
    return this.httpClient.get(url).pipe(
      tap(adjacency => this.adjacency = adjacency),
      tap(adjacency => this.adjacency$.next(adjacency))
    );
  }

  filterAdjacency(uais: string[]) {
    for (const uai of uais) {
      this.filteredAdjacency = this.BFS(uai, this.adjacency, this.filteredAdjacency);
      this.filteredAdjacency$.next(this.filteredAdjacency);
    }
  }

  BFS(root: string, adj: any, fAdj: any) {
    let q: any = [root];
    let parent: any;
    while (parent = q.pop()) {
      console.log(parent);
      const children = adj[parent];
      fAdj[parent] = children;
      q = q.concat(children);
    }
    return fAdj;
  }
}
