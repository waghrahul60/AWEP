import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'black-app';
  public list: any = [];

  constructor(private http: HttpClient) {}
  // async makeAjaxCall() {
  //console.log('http');
  //const url = 'https://jsonplaceholder.typicode.com/posts';
  //const result = await this.http.get(url).toPromise();
  //console.log(result);
  // this.list = result;
  //}

  ngOnInit(): void {
    console.log('oninit');
    //  this.makeAjaxCall();
  }

  async makePostApiCall() {
    const userJson = {
      username: 'Rahul',
      email: 'abcd@gmail.com',
      password: 'soifyghuoi3475',
      mobile: '2445566777',
    };
    const url = 'http://localhost:3000/adduser';
    await this.http.post(url, userJson).toPromise();
  }
}
