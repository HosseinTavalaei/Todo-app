import { Component, Input} from '@angular/core';
import { ITodo } from 'src/app/auth/Database';


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

  constructor() {}
  

  changeInputIcon(){
    if (this.inputIconName === 'add'){
      this.inputIconName = 'ellipse-outline'
    }else {
      this.inputIconName = 'add'
    }
  }
  
}
