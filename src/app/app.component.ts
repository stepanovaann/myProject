import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  name: string = 'Анна';
  age: number = 15;
  imgUrl: string = 'https://zooclub.ru/attach/6566.jpg';
}
