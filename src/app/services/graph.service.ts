import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  nodes = [];
  nodes$ = new BehaviorSubject<any>(this.nodes);

  adjacency = {};
  adjacency$ = new BehaviorSubject<any>(this.adjacency);

  filteredAdjacency = {};
  filteredAdjacency$ = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient
  ) { }

  getNodes() {
    const url = 'http://localhost:5000/nodes';
    return this.httpClient.get<any[]>(url).pipe(
      tap(nodes => console.log(nodes)),
      tap(nodes => this.nodes = nodes),
      tap(nodes => this.nodes$.next(nodes))
    );
  }

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
      const children = adj[parent];
      fAdj[parent] = children;
      q = q.concat(children);
    }
    return fAdj;
  }
}
