import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  private selectedSchools: any = [];

  constructor(private httpClient: HttpClient) { }

  getSchools(): Observable<School[]> {
    const url = 'assets/etab.json';
    return this.httpClient.get<School[]>(url).pipe(
      map(res => res)
    );
  }

  setSelectedSchools(values: any) {
    this.selectedSchools = values;
  }

  getSelectedSchools() {
    return this.selectedSchools;
  }
}
