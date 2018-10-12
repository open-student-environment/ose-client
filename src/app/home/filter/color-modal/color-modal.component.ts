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
  parameters = [];
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
      parameter: ['', []],
      rightColor: ['#e66465', []],
      leftColor: ['#5d88e6', []]
    });
  }

  apply() {
    this.dialogRef.close(this.form.value);
  }

  bgImage() {
    const lc = this.form.get('rightColor').value.slice(1, 7);
    const rc = this.form.get('leftColor').value.slice(1, 7);
    return {'background-image': `linear-gradient(to right, \#${rc}, \#${lc}`};
  }

}
