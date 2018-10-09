import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { D3Service } from '../d3/d3.service';
import { ForceDirectedGraph, Node, Link } from '../d3/models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() adjancy: any;
  @Input() nodeTypes: any;

  width = 968;
  height = 800;

  nodes: Node[];
  links: Link[];
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

    const nodeColors = {};
    this.nodeTypes.forEach(element => {
      nodeColors[element.name] = this.getColor(element.type);
    });
    const nodes = Object.keys(this.adjancy)
      .map(node => new Node(node, nodeColors[node]));
    const invnodes = {};
    for (const node of nodes) {
      invnodes[node.id] = node;
    }
    const links = [];
    for (let i = 0; i < nodes.length; i++) {
        const source = nodes[i];
        for (const target of this.adjancy[source.id]) {
            links.push(new Link(source, invnodes[target]));
        }
    }
    this.nodes = nodes;
    this.links = links;
    this.graph = this.d3Service.getForceDirectedGraph(nodes, links, {width: this.width, height: this.height});
  }

}
