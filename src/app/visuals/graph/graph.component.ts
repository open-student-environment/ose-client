import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { D3Service } from '../../d3/d3.service';
import { ForceDirectedGraph, Node } from '../../d3/models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() adjancy: any;

  graph: ForceDirectedGraph;

  private _options: { width, height } = { width: 800, height: 600 };

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    this.graph = this.d3Service.getForceDirectedGraph(this.adjancy, this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
