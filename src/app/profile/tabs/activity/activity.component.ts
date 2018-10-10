import { Component, Input, OnInit } from '@angular/core';
import { GraphService } from '../../../services/graph.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input() node = {id: '55db4891-9ea6-4c5d-b55d-2063f815d90d'};

  bars = Array<any>(100);
  graph = {
    data: [{
      x: [],
      y: [],
      mode: 'markers',
      marker: {
        size: 2,
        color: []
      },
      text: [],
      textposition: 'top',
      type: 'scatter'
    }],
    layout: {height: 400}
  };

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit() {
    for (let i = 0; i < this.bars.length; i++) {
      this.bars[i] = {name: i, value: (i % 10) === 0};
    }
    this.graphService.getActivity(this.node)
      .subscribe((activity: Array<any>) => {
        const data = activity.map(item => ({y: 1, x: item.timestamp, l: item.verb}));
        const x = data.map(e => e.x);
        const y = data.map(e => e.y);
        const text = data.map(e => e.l);
        this.graph.data = [{
          x: x,
          y: y,
          mode: 'markers',
          marker: {
            size: 5,
            color: text.map(e => this.getColor(e))
          },
          text: text,
          textposition: 'top',
          type: 'scatter'
        }];
      });
  }

  getColor(s) {
    switch (s) {
      case 'http://adlnet.gov/expapi/verbs/logged-in': {
        return 0;
      }
      case 'http://adlnet.gov/expapi/verbs/initialized': {
        return 2;
      }
      case 'http://adlnet.gov/expapi/verbs/completed': {
        return 4;
      }
      case 'http://adlnet.gov/expapi/verbs/answered': {
        return 6;
      }
      case 'http://adlnet.gov/expapi/verbs/produced': {
        return 8;
      }
      default: {
        return 10;
      }
    }

  }

}
