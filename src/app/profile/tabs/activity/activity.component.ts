import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  bars = Array<any>(100);

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.bars.length; i++) {
      this.bars[i] = {name: i, value: (i % 10) == 0};
    }
  }

}
