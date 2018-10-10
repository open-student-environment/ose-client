import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GraphComponent } from '../graph/graph.component';
import { gray } from 'd3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(GraphComponent) graph: GraphComponent;

  nodes: any[];
  links: any;
  loadingSubject = new BehaviorSubject<Boolean>(true);
  loading$ = this.loadingSubject.asObservable();
  filters: any[] = [];
  params: string[] = ['Activity', 'NodeType'];

  constructor(
    private graphService: GraphService,
  ) { }

  ngOnInit() {
    this.graphService.getNodes()
      .subscribe(nodes => {
        this.nodes = nodes;
        this.getLinks();
      });
    this.graphService.getParameters()
      .subscribe(params => {
        for (const param of params) {
          const filter: any = {};
          filter['name'] = param.name;
          filter['min'] = Math.min.apply(null, param.series.map(e => e.name));
          filter['max'] = Math.max.apply(null, param.series.map(e => e.name));
          this.filters.push(filter);
          this.params.push(param.name);
        }
        console.log(params);
      });
  }

  getLinks() {
    this.graphService.getLinks()
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe(links => this.links = links);
  }

  refilter(event) {
    const nodes = this.graph.getNodes();
    if (event) {
      for (const node of nodes) {
        if (node.indicators) {
          const v = node.indicators[event.title.toLowerCase()];
          console.log(v);
          if (v <= event.min || v >= event.max) {
            node.size = 0;
          }
        }
      }
    }
  }

  resize(event) {
    const nodes = this.graph.getNodes();
    if (event) {
      for (const node of nodes) {
        if (node.indicators) {
          node.size = node.indicators[event.parameter.toLowerCase()];
        }
      }
    }
  }

  recolor(event) {
    console.log(event);
    const nodes = this.graph.getNodes();
    if (event) {
      for (const node of nodes) {
        if (node.indicators) {
          node.color = node.indicators[event.parameter.toLowerCase()];
        } else {
          node.color = 'grey';
        }
      }
    }
  }
}
