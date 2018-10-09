import { Component, Input, OnInit } from '@angular/core';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {

  @Input() node = {id: '55db4891-9ea6-4c5d-b55d-2063f815d90d'};

  data: any;
  indicators = [];

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit() {
    this.graphService.getSummary(this.node)
      .subscribe((series: any) => {
        this.data = [series];
        for (const indicator of series.series) {
          this.indicators.push(indicator);
        }
      });
  }
}
