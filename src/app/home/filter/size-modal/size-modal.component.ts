import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-size-modal',
  templateUrl: './size-modal.component.html',
  styleUrls: ['./size-modal.component.css']
})
export class SizeModalComponent implements OnInit {

  @Input() indicators: string[] = [];
  form = FormGroup;
  parameters = ['None', 'activity'];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.parameters = this.parameters.concat(this.indicators);
  }

}
