import { Component, OnInit } from '@angular/core';
import { MatGridTile } from '@angular/material';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {
  data = data;

  indicators = [
  {name: 'GRIT', score: .98},
  {name: 'GRIT', score: .98},
  {name: 'GRIT', score: .98},
  {name: 'GRIT', score: .98},
  {name: 'GRIT', score: .98},
  {name: 'GRIT', score: .98},
  ];

  constructor() { }

  ngOnInit() {
  }

}

const data = [
  {
    'name': 'Grit',
    'series': [
      {
        'value': 5925,
        'name': '2016-09-17T15:41:42.590Z'
      },
      {
        'value': 6411,
        'name': '2016-09-23T22:15:03.077Z'
      },
      {
        'value': 3428,
        'name': '2016-09-12T23:27:09.810Z'
      },
      {
        'value': 5639,
        'name': '2016-09-18T01:10:00.854Z'
      },
      {
        'value': 5514,
        'name': '2016-09-13T08:57:07.389Z'
      }
    ],
  }, {
    'name': 'Autonomy',
    'series': [
      {
        'value': 5925,
        'name': '2016-09-17T15:41:42.590Z'
      },
      {
        'value': 6411,
        'name': '2016-09-23T22:15:03.077Z'
      },
      {
        'value': 3428,
        'name': '2016-09-12T23:27:09.810Z'
      },
      {
        'value': 5639,
        'name': '2016-09-18T01:10:00.854Z'
      },
      {
        'value': 5514,
        'name': '2016-09-13T08:57:07.389Z'
      }
    ],
  }, {
    'name': 'Perseverance',
    'series': [
      {
        'value': 5925,
        'name': '2016-09-17T15:41:42.590Z'
      },
      {
        'value': 6411,
        'name': '2016-09-23T22:15:03.077Z'
      },
      {
        'value': 3428,
        'name': '2016-09-12T23:27:09.810Z'
      },
      {
        'value': 5639,
        'name': '2016-09-18T01:10:00.854Z'
      },
      {
        'value': 5514,
        'name': '2016-09-13T08:57:07.389Z'
      }
    ],
  }
];
