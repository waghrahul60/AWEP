import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form-app';

  //public nameControl = new FormControl('', Validators.required);
  public nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.pattern('/^[a-zA-Z] $/'),
  ]);
  public readFormValue() {
    console.log(this.nameControl.value);
    this.nameControl.setValue('');
  }
}
