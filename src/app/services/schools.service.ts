import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private httpClient: HttpClient) { }

  getSchools(): Observable<School[]> {
    // const url = 'https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-adresse-et-geolocalisation-etablissements-premier-et-second-degre&facet=numero_uai&facet=appellation_officielle&facet=secteur_public_prive_libe&facet=code_postal_uai&facet=localite_acheminement_uai&facet=nature_uai&facet=nature_uai_libe&facet=etat_etablissement&facet=code_departement&facet=code_region&facet=code_academie';
    const url = 'assets/etab.json';
    return this.httpClient.get<School[]>(url).pipe(
      map(res => res.slice(1, 100))
      // map(res => (res as any).records),
      // map(records => records.map(record => record.fields)),
    );
  }
}
