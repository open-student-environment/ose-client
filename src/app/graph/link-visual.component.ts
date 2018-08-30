import { Component, Input } from '@angular/core';
import { Link } from '../d3/models';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        [attr.x1]="link.source.x"
        [attr.y1]="link.source.y"
        [attr.x2]="link.target.x"
        [attr.y2]="link.target.y"
        stroke-width="2"
        stroke="#4A4A4A"></svg:line>
  `
})
export class LinkVisualComponent  {
  @Input() link: Link;
}
