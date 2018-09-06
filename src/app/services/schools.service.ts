import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  private selectedSchools: any = [];

  constructor(private httpClient: HttpClient) { }

  getSchools(): Observable<School[]> {
    const url = 'http://localhost:5000/etab';
    return this.httpClient.get<School[]>(url);
  }

  setSelectedSchools(values: any) {
    this.selectedSchools = values;
  }

  getSelectedSchools() {
    return this.selectedSchools;
  }
}
