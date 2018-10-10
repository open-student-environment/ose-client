import { Component, OnInit, Input } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() node: any;

  md5Hash(node) {
    const md5 = new Md5();
    let s = '';
    if (node.type === 'user:eleve' || node.type === 'user:enseignant') {
      s = `https://www.gravatar.com/avatar/${md5.appendStr(node.id).end()}?d=robohash&s=250`;
    } else {
      s = `https://www.gravatar.com/avatar/${md5.appendStr(node.id).end()}?d=retro&s=250`;
    }
    return s;
  }

  constructor() {}

  ngOnInit() {
  }

}
