import { ITodo } from 'src/app/auth/Database';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  existTodos: ITodo[] | undefined;
  userLocation: string = 'completedPage'
  
  constructor(
    private todosService: TodosService,

  ) {}

  ngOnInit() {
    this.existTodos = this.todosService.getCompletedTodos();
  }

}
