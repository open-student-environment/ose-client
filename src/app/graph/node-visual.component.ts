import { Component, Input } from '@angular/core';
import { Node } from '../d3/models';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle cx="0" cy="0" r="50" [attr.fill]="node.color"></svg:circle>
    <svg:g>
  `
})
export class NodeVisualComponent {
  @Input() node: Node;
}
