import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { GraphService } from '../../../services/graph.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  line = line;
  curve = shape.curveNatural;
  series: any[] = [];

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit() {
    console.log(line);

    this.graphService.getParameters()
      .subscribe((activity: Array<any>) => {
        // const data = activity.map(item => ({y: 1, x: item.timestamp}));
      });
    const node = {id: '55db4891-9ea6-4c5d-b55d-2063f815d90d'};
    this.graphService.getParametersWithContext(node)
      .subscribe((res: any) => {
        this.series = res;
        console.log(this.series);
      });
  }
}

const line = [
  {
    'name': 'Guadeloupe',
    'series': [
      {
        'value': 1,
        'name': 1.7
      },
      {
        'value': 2,
        'name': 3.8
      },
      {
        'value': 1,
        'name': 3
      },
      {
        'value': 1,
        'name': 4
      },
      {
        'value': 1,
        'name': 5
      }
    ]
  }
];
