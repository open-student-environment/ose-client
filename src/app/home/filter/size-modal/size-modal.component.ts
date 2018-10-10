import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-size-modal',
  templateUrl: './size-modal.component.html',
  styleUrls: ['./size-modal.component.css']
})
export class SizeModalComponent implements OnInit {

  form: FormGroup;
  parameters: string[];
  growthFunctions = ['Linear', 'Logarithmic'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SizeModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.parameters = ['None'].concat(data.parameters);
  }

  ngOnInit() {
    this.form =  this.fb.group({
      parameter: ['None', []],
      minSize: [5, []],
      maxSize: [30, []],
      growth: ['Linear', []]
    });
  }

  apply() {
    this.dialogRef.close(this.form.value);
  }

}
