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
  userLocation: string = 'mydayPage'
  isOpenOption: boolean = false;
  todoOptionSelected!: ITodo;
  
  constructor(
    private todosService: TodosService
    
    ) { }

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

  ChangeOptionsStatus(option: boolean){
    this.isOpenOption = option
  }

  setTodoOption(todo: ITodo){
    this.todoOptionSelected = todo
  }

  taskScreenSize(): number{
    let size : number;
    if(this.isOpenOption === true){
      size = 9 
    }else {
      size = 12
    }
    return size;
  }
 
}
