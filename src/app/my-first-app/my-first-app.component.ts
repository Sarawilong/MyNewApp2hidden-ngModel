import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-app',
  templateUrl: './my-first-app.component.html',
  styleUrls: ['./my-first-app.component.sass']
})
export class MyFirstAppComponent implements OnInit {
    User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

    visible = true;
    toggleDiv() {
      this.visible = !this.visible;
    }

  constructor() { }

  ngOnInit() {
  }

}
