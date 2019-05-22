import { Component, OnInit } from '@angular/core';
import { UnlessDirective } from './unless/unless.directive';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

  constructor() { }

  ngOnInit() {
  }

  changeOddElement() {
    if (this.onlyOdd) {
      this.onlyOdd = false;
    } else {
      this.onlyOdd = true;
    }
    console.log(this.onlyOdd);
  }
}
