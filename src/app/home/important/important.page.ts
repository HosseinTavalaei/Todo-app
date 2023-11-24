import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/auth/Database';

@Component({
  selector: 'app-important',
  templateUrl: './important.page.html',
  styleUrls: ['./important.page.scss'],
})
export class ImportantPage implements OnInit {
  existTodos: ITodo[] | undefined;
  constructor(
    private todosService: TodosService

  ) { }

  ngOnInit() {
   this.existTodos = this.todosService.getImportantTodos()
  }

  removeTask(id: number, event: any){

    let selectedTag = event.target.parentElement.parentElement

    selectedTag.remove()
    
    this.todosService.removeTodo(id)

  }

  setTodoStatusToComplete(id : number, event: any){
    let selectedTag = event.target.parentElement.parentElement

    selectedTag.remove()

    this.todosService.setTodoToComplete(id)

  }

}
