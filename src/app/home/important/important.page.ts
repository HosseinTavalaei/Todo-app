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
  userLocation: string = 'importantPage'
  
  constructor(
    private todosService: TodosService,
  ) { }

  ngOnInit() {
   this.existTodos = this.todosService.getImportantTodos()
  }

}
