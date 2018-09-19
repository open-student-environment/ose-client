import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { GraphService } from '../../../services/graph.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  bars = Array<any>(20);
  line = line;
  curve = shape.curveNatural;

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit() {
    for (let i = 0; i < this.bars.length; i++) {
      this.bars[i] = {name: i, value: i % 10};
    }
    this.graphService.getParameters()
      .subscribe((activity: Array<any>) => {
        // const data = activity.map(item => ({y: 1, x: item.timestamp}));
      });
  }
}

const line = [
  {
    'name': 'Guadeloupe',
    'series': [
      {
        'value': 6540,
        'name': '2016-09-12T22:50:25.957Z'
      },
      {
        'value': 2345,
        'name': '2016-09-16T22:36:49.132Z'
      },
      {
        'value': 5566,
        'name': '2016-09-19T09:53:40.601Z'
      },
      {
        'value': 5711,
        'name': '2016-09-23T02:47:47.156Z'
      },
      {
        'value': 4324,
        'name': '2016-09-18T23:07:39.641Z'
      }
    ]
  }
]
