import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';

import { Observable, of, from } from 'rxjs';
import { tap } from 'rxjs/operators';

import { School } from '../models/school';
import { SchoolsService } from '../services/schools.service';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  schools: School[];
  schools$: Observable<any> = this.schoolService.getSchools();

  displayedColumns: string[] = ['select', 'nom_etablissement', 'code_uai'];
  dataSource = new MatTableDataSource<School>(this.schools);
  selection = new SelectionModel<any>(true, []);

  constructor(
    private schoolService: SchoolsService
  ) { }

  ngOnInit() {
    this.schools$.pipe(tap(s => console.log(s)))
    .subscribe(
      s => this.schools = s
    );
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
