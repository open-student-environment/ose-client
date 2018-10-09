import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nodes: any[];
  adjacency: any;
  loadingSubject = new BehaviorSubject<Boolean>(true);
  loading$ = this.loadingSubject.asObservable();
  filters: any[] = [];

  constructor(
    private graphService: GraphService,
  ) { }

  ngOnInit() {
    this.graphService.getNodes()
      .subscribe(nodes => {
        this.nodes = nodes;
        this.getAdjacency();
      });
    this.graphService.getParameters()
      .subscribe(params => {
        for (const param of params) {
          const filter: any = {};
          filter['name'] = param.name;
          filter['min'] = Math.min.apply(null, param.series.map(e => e.name));
          filter['max'] = Math.max.apply(null, param.series.map(e => e.name));
          this.filters.push(filter);
        }
      });
    console.log(this.filters);
  }

  getAdjacency() {
    this.graphService.getAdjacency()
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe(adj => this.adjacency = adj);
  }

}
