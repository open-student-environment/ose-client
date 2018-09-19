import { Component, OnInit } from '@angular/core';
import { GraphService } from '../../../services/graph.service';

import { Node } from '../../../d3/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  bars = Array<any>(100);
  graph = {
    data: [{
      x: [],
      y: [],
      mode: 'markers',
      type: 'scatter'
    }],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
  };

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit() {
    for (let i = 0; i < this.bars.length; i++) {
      this.bars[i] = {name: i, value: (i % 10) === 0};
    }
    const node = {id: '55db4891-9ea6-4c5d-b55d-2063f815d90d'};
    this.graphService.getActivity(node)
      .subscribe((activity: Array<any>) => {
        const data = activity.map(item => ({y: 1, x: item.timestamp}));
        const x = data.map(e => e.x);
        const y = data.map(e => e.y);
        this.graph.data = [{x: x, y: y, mode: 'markers', type: 'scatter'}];
        console.log(this.graph);
      });
  }

}
