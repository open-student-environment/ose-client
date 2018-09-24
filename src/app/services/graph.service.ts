import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Node } from '../d3/models';


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
    const url = 'http://f11777f0.ngrok.io/nodes';
    return this.httpClient.get<any[]>(url);
  }

  getAdjacency() {
    const url = 'http://f11777f0.ngrok.io/adjancy';
    return this.httpClient.get(url);
  }

  getSummary(node: Node) {
    const url = environment.apiUrl + `nodes/parameters`;
    const params = new HttpParams()
      .set('node-name', node.id);
    return this.httpClient.get(url, {params: params});
  }

  getActivity(node: Node) {
    const url = environment.apiUrl + `nodes/activity`;
    const params = new HttpParams()
      .set('node-name', node.id);
    return this.httpClient.get(url, {params: params});
  }

  getParameters(node: Node = null) {
    const url = environment.apiUrl + 'model/parameters';
    return this.httpClient.get(url);
  }

  getParametersWithContext(node: Node) {
    const url = environment.apiUrl + `model/parameters?node-name=${node.id}&context=true`;
    return this.httpClient.get(url);
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
