import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { D3Service } from '../../d3/d3.service';
import { ForceDirectedGraph, Node } from '../../d3/models';

@Component({
  selector: 'app-graph',
  template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
        <svg:app-link-visual [link]="link" *ngFor="let link of links">
        <svg:app-node-visual [node]="node" *ngFor="let node of nodes">
    </svg>
  `,
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;

  graph: ForceDirectedGraph;

  private _options: { width, height } = { width: 800, height: 600 };

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
