import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First Project';
  myPost = 'Post';

  counter = 100;
  Comment = '';
  commentlist = [];
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }

  addComment() {
    this.commentlist.push['hello anguler'];
  }
}
