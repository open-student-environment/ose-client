import { Component, Input } from '@angular/core';
import { Node } from '../../d3/models';

@Component({
  selector: 'app-node-visual',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <circle cx="0" cy="0" r="50"></circle>
      <text>{{node.id}}<text>
    <svg:g>
  `
})
export class NodeVisualComponent {
  @Input() node: Node;
}
