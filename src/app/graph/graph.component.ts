import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { D3Service } from '../d3/d3.service';
import { ForceDirectedGraph, Node, Link } from '../d3/models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() nodes: Node[];
  @Input() links: Link[];

  width = 968;
  height = 800;
  graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    this.launchSimulation();
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getColor(e) {
    switch (e) {
      case 'user:enseignant': { return 'orange'; }
      case 'user:eleve': { return 'purple'; }
      case 'school': { return 'blue'; }
      case 'groupe': { return 'green'; }
      case 'classe': { return 'red'; }
      default: {return 'black'; }
    }
  }

  launchSimulation() {
    for (const node of this.nodes) {
      node.color = this.getColor(node.type);
      node.size = 10;
    }
    this.graph = this.d3Service.getForceDirectedGraph(
      this.nodes,
      this.links,
      {width: this.width, height: this.height});
  }

  getNodes() {
    return this.nodes;
  }

}
