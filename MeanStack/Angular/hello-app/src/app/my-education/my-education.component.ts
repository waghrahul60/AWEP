import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-education',
  templateUrl: './my-education.component.html',
  styleUrls: ['./my-education.component.css'],
})
export class MyEducationComponent implements OnInit {
  educationList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
