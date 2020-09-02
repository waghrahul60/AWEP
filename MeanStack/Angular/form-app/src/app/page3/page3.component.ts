import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  /*formGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
  });*/

  fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  // using form builder service
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  async registerUser() {
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:3000/adduser';
    await this.http.post(url, data).toPromise();

    this.fbFormGroup.reset();
  }
}
