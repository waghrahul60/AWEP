import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bootstrap Practice';
  task = new FormControl();
  taskPlaceHolder = 'Add here';

  taskList = [];
  addTask() {
    const newtask = this.task.value;
    this.taskList.push(newtask);
  }
}
