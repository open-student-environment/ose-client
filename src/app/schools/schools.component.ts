import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { School } from '../models/school';
import { SchoolsService } from '../services/schools.service';
import { GraphService } from '../services/graph.service';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  @Output() launch = new EventEmitter<string>();

  displayedColumns: string[] = ['select', 'numero_uai', 'appellation_officielle', 'adresse',
    'code_postal', 'commune', 'departement', 'academie'];
  dataSource = new MatTableDataSource<School>([]);
  selection = new SelectionModel<any>(true, []);
  toggleTable = false;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private schoolService: SchoolsService,
    private graphService: GraphService
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

  onChange($event) {
    this.graphService.filterAdjacency(
      this.selection.selected.map( item => item.numero_uai));
  }

  remove(item: string) {
    this.selection.deselect(item);
  }

  onLaunch(e: string) {
    this.launch.emit(e);
  }
}
