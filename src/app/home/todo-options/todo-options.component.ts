import { Component, Input} from '@angular/core';
import { ISubTodo, ITodo } from 'src/app/auth/Database';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-todo-options',
  templateUrl: './todo-options.component.html',
  styleUrls: ['./todo-options.component.scss'],
})
export class TodoOptionsComponent {
  @Input() todo: ITodo | undefined; 
  inputIconName: string = 'add'
  todoItem: string = 'todo-item-detail'
  isDetailMode: boolean = true; 

  constructor(
    private todosService: TodosService
  ) {}
  

  changeInputIcon(){
    if (this.inputIconName === 'add'){
      this.inputIconName = 'ellipse-outline'
    }else {
      this.inputIconName = 'add'
    }
  }

  addNewStep(event: any){
      let value: string; 
    if (event.key === 'Enter') {
      value = event.target.value;

      this.todosService.addNewSubTask(value, this.todo)

        event.target.value = ''

    }
  }

  setToComplete(step: ISubTodo){

    if (step !== undefined) {
      if (step.isCompleted !== true) {
        
        this.todosService.setSubTodoComplete(step)
      }else{
        this.todosService.undoSubTodoComplete(step)
      }
    }
  }

  showSubTodos(){
    console.log(this.todo?.subTodos);
  }
  
}
