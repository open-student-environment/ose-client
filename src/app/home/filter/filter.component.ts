import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { SizeModalComponent } from './size-modal/size-modal.component';
import { ColorModalComponent } from './color-modal/color-modal.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() type = 'filter';
  @Input() align = 'left';
  @Input() title: string;
  @Input() inf: number;
  @Input() sup: number;
  @Input() parameters: string[];
  @Output() filterEvent = new EventEmitter();

  @ViewChild('button') buttonRef;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass = 'none';
    dialogConfig.disableClose = false;
    const pos = this.buttonRef.nativeElement.getBoundingClientRect();
    dialogConfig.position = {top: `${pos.bottom + 8}px`, left: `${pos.left}px`};
    if (this.align === 'right') {
      dialogConfig.position = {top: `${pos.bottom + 8}px`, left: `${pos.right - 300}px`};
    }
    if (this.align === 'top-right') {
      dialogConfig.position = {top: `${pos.top - 224 - 8}px`, left: `${pos.right - 300}px`};
    }
    dialogConfig.width = '300px';

    dialogConfig.data = {
      id: 1,
      title: this.title,
      inf: this.inf,
      sup: this.sup,
      parameters: this.parameters
    };

    let dialogRef: MatDialogRef<any, any>;
    switch (this.type) {
      case 'color': {
        dialogRef = this.dialog.open(ColorModalComponent, dialogConfig);
        break;
      }
      case 'size': {
        dialogRef = this.dialog.open(SizeModalComponent, dialogConfig);
        break;
      }
      default: {
        dialogRef = this.dialog.open(FilterModalComponent, dialogConfig);
        break;
      }
    }

    dialogRef.afterClosed()
    .subscribe(event => this.filterEvent.emit(event));

  }

}
