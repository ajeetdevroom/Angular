import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style-templates',
  template: `
    <p class="bold">
      ng g c components/inline-style-templates --inline-style --inline-template
    </p>
  `,
  styles: [
   ` .bold {
    font-weight: 700;
    color:green;
  }`
  ]
})
export class InlineStyleTemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
