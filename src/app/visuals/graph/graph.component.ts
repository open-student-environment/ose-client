import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { D3Service } from '../../d3/d3.service';
import { ForceDirectedGraph, Node, Link } from '../../d3/models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() adjancy: any;

  nodes: Node[];
  links: Link[];
  graph: ForceDirectedGraph;

  private _options: { width, height } = { width: 800, height: 600 };

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    const nodes = Object.keys(this.adjancy).map(i => new Node(i));
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
    console.log(invnodes);
    this.graph = this.d3Service.getForceDirectedGraph(nodes, links, this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  stopSimulation() {
    this.graph.stopSimulation();
  }

  restartSimulation() {
    this.graph.restartSimulation();
  }
}
