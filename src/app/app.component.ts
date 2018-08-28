import { Component } from '@angular/core';

const ADJ = {
  '0': [ 7,  2,  6],
  '1': [ 8,  3,  1],
  '2': [ 4,  2,  9],
  '3': [10,  3,  5],
  '4': [ 6,  4, 11],
  '5': [ 1,  5, 12],
  '6': [ 1, 20, 13],
  '7': [ 2, 14, 21],
  '8': [ 3, 22, 15],
  '9': [ 4, 16, 23],
  '10': [ 5, 17, 23],
  '11': [ 6, 19, 18],
  '12': [ 7, 19],
  '13': [20,  8],
  '14': [21,  9],
  '15': [22, 10],
  '16': [23, 11],
  '17': [23, 12],
  '18': [12, 13],
  '19': [14,  7],
  '20': [ 8, 15],
  '21': [ 9, 16],
  '22': [10, 17],
  '23': [11, 18]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  adjancy: any;

  constructor() {
    this.adjancy = ADJ;
  }
}
