import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
})
export class MainBodyComponent implements OnInit {
  list = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
