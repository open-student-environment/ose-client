import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  @Input() node = {id: '55db4891-9ea6-4c5d-b55d-2063f815d90d'};

  constructor() { }

  ngOnInit() {
  }

}
