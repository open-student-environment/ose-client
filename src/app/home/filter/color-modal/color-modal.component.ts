import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-color-modal',
  templateUrl: './color-modal.component.html',
  styleUrls: ['./color-modal.component.css']
})
export class ColorModalComponent implements OnInit {

  @Input() indicators: string[] = [];
  form: FormGroup;
  parameters = ['NodeType', 'Activity'];
  gradient: any;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ColorModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.parameters = data.parameters;
  }

  ngOnInit() {
    this.form = this.fb.group({
      parameter: ['NodeType', []],
      rightColor: ['#e66465', []],
      leftColor: ['#5d88e6', []]
    });
    this.setGradient();
  }

  setGradient() {
    this.gradient = `linear-gradient(to right, ${this.form.get('leftColor').value}, ${this.form.get('rightColor').value});`;
  }

  apply() {
    this.dialogRef.close(this.form.value);
  }

}
