import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ITodo } from 'src/app/auth/Database';

@Component({
  selector: 'app-myday',
  templateUrl: './myday.page.html',
  styleUrls: ['./myday.page.scss'],
})
export class MydayPage implements OnInit {

  inputIconName: string = 'add'
  existTodos :ITodo[] | undefined;
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.existTodos = this.todosService.getActiveUserTodos()
    
  }

  changeInputIcon(){
    if (this.inputIconName === 'add'){
      this.inputIconName = 'ellipse-outline'
    }else {
      this.inputIconName = 'add'
    }
  }

  addNewTask(event: any){
    if(event.key === 'Enter'){
      this.todosService.addNewTodo(event.target.value)
  
      event.target.value = null
    }else return
    
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

  setTodoStatusToImportant(id: number, event: any){
    let selectedTag = event.target.parentElement.parentElement

    selectedTag.remove()

    this.todosService.setTodoToImportant(id)
  }
 
}
