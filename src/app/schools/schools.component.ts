import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';

import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { School } from '../models/school';
import { SchoolsService } from '../services/schools.service';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['select', 'numero_uai', 'appellation_officielle', 'adresse',
    'code_postal', 'commune', 'departement', 'academie'];
  dataSource = new MatTableDataSource<School>([]);
  selection = new SelectionModel<any>(true, []);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private schoolService: SchoolsService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.schoolService.getSchools()
      .subscribe(schools => this.dataSource.data = schools);
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

  setSelectedSchools() {
    this.selection.selected.map( item => console.log(item.numero_uai));
    this.schoolService.setSelectedSchools(this.selection.selected.map( item => item.numero_uai));
  }

}
