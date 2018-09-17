import { Component, OnInit, ViewChild } from '@angular/core';

import { GraphService } from './services/graph.service';
import { SchoolsService } from './services/schools.service';
import { GraphComponent } from './graph/graph.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(GraphComponent) graph: GraphComponent;

  nodes$ = this.graphService.nodes$;
  adjacency$ = this.graphService.adjacency$;
  filteredAdjacency$ = this.graphService.filteredAdjacency$;

  constructor(
    private graphService: GraphService,
    private schoolService: SchoolsService
  ) { }

  ngOnInit() {
    this.graphService.getAdjacency().subscribe();
    this.graphService.getNodes().subscribe();
  }

  filterAdjacency() {
    this.graphService.filterAdjacency(this.schoolService.getSelectedSchools());
  }

  launchSimulation(e: string) {
    this.graph.launchSimulation();
    console.log(e);
  }
}
