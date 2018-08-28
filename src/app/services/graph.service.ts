import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNodes() {
    const url = 'http://localhost:5000/nodes';
    return this.httpClient.get(url);
  }

  getAdjancy() {
    const url = 'http://localhost:5000/adjancy';
    console.log('here');
    return this.httpClient.get(url);
  }
}
