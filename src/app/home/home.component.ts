import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GraphComponent } from '../graph/graph.component';
import * as d3 from 'd3';
import { SearchSchoolsComponent } from '../shared/search-schools/search-schools.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(SearchSchoolsComponent) search: SearchSchoolsComponent;
  @ViewChild(GraphComponent) graph: GraphComponent;

  nodes: any[];
  links: any;
  loadingSubject = new BehaviorSubject<Boolean>(true);
  loading$ = this.loadingSubject.asObservable();
  filters: any[] = [];
  params: string[] = [];

  constructor(
    private graphService: GraphService,
  ) { }

  ngOnInit() {
    this.search.filteredSchools.subscribe(schools => this.filterSchools());
    this.graphService.getNodes()
      .subscribe(nodes => {
        this.nodes = nodes;
        this.getLinks(nodes);
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
      });
  }

  getLinks(nodes) {
    this.graphService.getLinks(nodes)
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe(links => this.links = links);
  }

  filterSchools() {
    if (this.graph) {
      const nodes = this.graph.getNodes();
      for (const node of nodes) {
        if (this.search.schools !== [] && !this.search.schools.includes(node.school)) {
          node.size = 0;
        }
      }
    }
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
        if (event.parameter === 'None') {
          node.size = 10;
        } else if (node.indicators) {
          node.size = node.indicators[event.parameter];
        }
      }
    }
  }

  recolor(event) {
    console.log(event);
    if (event) {
      const scale = d3.scaleQuantize()
        .range(d3.range(9))
        .domain([0, 31]);
      const colorScale = d3.scaleLinear()
        .range([event.leftColor, event.rightColor])
        .domain([0, 9]);
      const nodes = this.graph.getNodes();
      for (const node of nodes) {
        if (node.indicators) {
          const d = node.indicators[event.parameter];
          node.color = colorScale(scale(d));
        } else {
          node.color = 'grey';
        }
      }
    }
  }
}
