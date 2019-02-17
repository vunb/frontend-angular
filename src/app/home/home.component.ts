import { Component, OnInit } from '@angular/core';
import { TodoService } from './../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public todoService: TodoService
  ) {
    this.todoList = [];
  }

  text: string;
  isDisplay: boolean;
  isSpecial: boolean;
  isChangeFontSize: boolean;

  currentClasses: Object = {};
  currentStyles: Object = {};

  userInfo: any = {};
  todoList: Array<Todo>;

  ngOnInit() {
    this.text = 'Hello!';
    this.isDisplay = true;
    this.isSpecial = true;
    this.isChangeFontSize = false;

    this.setCurrentClasses();
    this.setCurrentStyles();

    this.userInfo = {
      username: 'Vunb'
    };

    // this.todoList = [
    //   'Thực hành ngClass, ngStyle, ngModel',
    //   'Thực hành với ngFor, let, ...'
    // ];

    this.todoService.getTodoList().subscribe((res) => {
      this.todoList = res;
    });

  }

  setCurrentClasses() {
    this.currentClasses = {
      special: true,
      'color-red': true
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-size': '20pt',
      'font-weight': 'bold'
    };
  }

  /**
   * Đăng ký tài khoản người dùng
   */
  register() {
    const info = `
    Thông tin tài khoản: ${this.userInfo.username}, mật khẩu: ${this.userInfo.password}
    `;

    alert(info);
  }

}
