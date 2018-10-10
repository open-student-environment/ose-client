import { Component, Input } from '@angular/core';
import { Node } from '../d3/models';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: '[nodeVisual]',
  template: `
    <ng-template #tipContent>Je suis <b>{{node.name}}</b>!</ng-template>
    <svg:g
      [attr.transform]="'translate(' + node.x + ',' + node.y + ')'"
      [ngbTooltip]="tipContent" container="body"
      (click)="openDialog(node); onClick(node);">
      <svg:circle cx="0" cy="0" [attr.r]="node.size" [attr.fill]="node.color"></svg:circle>
    <svg:g>
  `
})
export class NodeVisualComponent {
  @Input() node: Node;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  onClick(node) {
    console.log(node);
    // this.router.navigate(['/profile'], {queryParams: {node: node.id}});
  }

  openDialog(node) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.disableClose = false;
    dialogConfig.minWidth = 900;
    dialogConfig.height = '600px';

    dialogConfig.data = {
      id: 1,
      node: node
    };

    const dialogRef = this.dialog.open(ProfileComponent, dialogConfig);

  }
}
