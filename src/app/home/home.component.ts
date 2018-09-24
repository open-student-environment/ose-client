import { Component, OnInit } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, finalize, merge } from 'rxjs/operators';

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

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit() {
    this.graphService.getNodes()
      .subscribe(nodes => {
        this.nodes = nodes;
        this.getAdjacency();
      });
  }

  getAdjacency() {
    this.graphService.getAdjacency()
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe(adj => this.adjacency = adj);
  }

}
