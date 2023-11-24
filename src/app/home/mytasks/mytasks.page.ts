import { ITodo } from 'src/app/auth/Database';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.page.html',
  styleUrls: ['./mytasks.page.scss'],
})
export class MytasksPage implements OnInit {
  existTodos :ITodo[] | undefined;
  constructor(
    private todosService: TodosService

  ) { }

  ngOnInit() {
    this.existTodos = this.todosService.getCompletedTodos()
  }

  removeTask(id: number, event: any){

    let selectedTag = event.target.parentElement.parentElement

    selectedTag.remove()
    
    this.todosService.removeTodo(id)

  }
}
