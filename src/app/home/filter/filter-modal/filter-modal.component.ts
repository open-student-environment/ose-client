import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {

  form: FormGroup;
  inf: number;
  sup: number;
  title: string;
  range: number|number[];
  parameters: string[];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FilterModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
    this.inf = data.inf;
    this.sup = data.sup;
    this.parameters = data.parameters;
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.title, []],
      range: [[this.inf, this.sup], []]
    });
  }

  apply() {
    this.dialogRef.close(this.form.value);
  }
}
