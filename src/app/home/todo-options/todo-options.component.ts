import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/auth/Database';

@Component({
  selector: 'app-todo-options',
  templateUrl: './todo-options.component.html',
  styleUrls: ['./todo-options.component.scss'],
})
export class TodoOptionsComponent {
  @Input() todo!: ITodo; 
  constructor() { }

}
