import { Component, OnInit } from '@angular/core';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  title = 'Hello World';
  public faApple = faApple;
  public faGoogle = faGoogle;

  constructor() {}

  ngOnInit(): void {}
}
