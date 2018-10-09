import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { environment } from '../../environments/environment';

import { Node, Link } from '../d3/models';
import { map, tap } from 'rxjs/operators';


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

  getNodes(): Observable<Node[]> {
    const url = environment.apiUrl + 'nodes';
    // return this.httpClient.get<any[]>(url);
    console.log(nodes);
    return of(nodes);
  }

  getLinks(): Observable<Link[]> {
    return this.getAdjacency()
      .pipe(
        map(adj => this._getLinks(adj)),
        tap(links => console.log(links))
      );
  }

  _getLinks(adjacency): Link[] {
    const invnodes = {};
    for (const node of nodes) {
      invnodes[node.id] = node;
    }
    const links = [];
    for (let i = 0; i < nodes.length; i++) {
      const source = nodes[i];
      for (const target of adjacency[source.id]) {
        links.push(new Link(source, invnodes[target]));
      }
    }
    return links;
  }

  getAdjacency() {
    const url = environment.apiUrl + 'adjancy';
    return this.httpClient.get(url);
  }

  getModel() {
    const url = environment.apiUrl + 'model';
    return this.httpClient.get<string[]>(url);
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
    return this.httpClient.get<any[]>(url);
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

const nodes: Node[] = [
  {
    name: 'Prof. Xavier',
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