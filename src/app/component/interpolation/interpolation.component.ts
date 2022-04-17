import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  updateCounter=2;
  constructor() { }
  matchValue="yes"
  upper="text-uppercase"
  ngOnInit(): void {
  }
  getValue(){
    return "Function value is displaying"
  }

}
