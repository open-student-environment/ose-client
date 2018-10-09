import { Component, OnInit, Input } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() node = {
    id: '55db4891-9ea6-4c5d-b55d-2063f815d90d',
    name: 'Maxime Dupont',
    grade: '6ème',
    school: 'Collège Jean Jaurès',
    location: 'Paris'
  };

  md5Hash(id) {
    const md5 = new Md5();
    const s = `https://www.gravatar.com/avatar/${md5.appendStr(id).end()}?d=robohash&s=250`;
    return s;
  }

  constructor() {}

  ngOnInit() {
  }

}
