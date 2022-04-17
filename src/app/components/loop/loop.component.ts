import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users=["Ajeet","Amit","Sumit","Niranjan","Manoj"];

  usersDetails=[
    {name:"Ajeet",address:"Rampur Bhagan",mobile:"8808461356"},
    {name:"Mohit",address:"Ayodhya",mobile:"05278-64152"},
    {name:"Rakesh",address:"Delhi",mobile:"8826699283"}
  ];

}
