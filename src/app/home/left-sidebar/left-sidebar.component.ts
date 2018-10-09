import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  params = ['Grit', 'Autonomy'];
  filters = [];
  selection = new SelectionModel<string>(true, []);

  constructor() { }

  ngOnInit() {
  }

}
