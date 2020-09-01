import { Component, OnInit } from '@angular/core';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css'],
})
export class MyProjectComponent implements OnInit {
  public faApple = faApple;
  public faGoogle = faGoogle;

  constructor() {}

  ngOnInit(): void {}
}
