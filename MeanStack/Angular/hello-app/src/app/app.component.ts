import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-app';
  //linksList={"Project","Education"}

  constructor(private router: Router) {}
  gotoRoute(page) {
    this.router.navigate([page]);
  }
}
