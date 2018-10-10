import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-size-modal',
  templateUrl: './size-modal.component.html',
  styleUrls: ['./size-modal.component.css']
})
export class SizeModalComponent implements OnInit {

  @Input() indicators: string[] = [];

  form: FormGroup;
  parameters = ['None', 'Activity'];
  growthFunctions = ['Linear', 'Logarithmic'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SizeModalComponent>,
  ) { }

  ngOnInit() {
    this.parameters = this.parameters.concat(this.indicators);
    this.form =  this.fb.group({
      parameter: ['None', []],
      minSize: [5, []],
      maxSize: [50, []],
      growth: ['linear', []]
    });
  }

  apply() {
    this.dialogRef.close(this.form.value);
  }

}
