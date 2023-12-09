import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { ITodo } from 'src/app/auth/Database';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-display-todos',
  templateUrl: './display-todos.page.html',
  styleUrls: ['./display-todos.page.scss'],
})
export class DisplayTodosPage implements OnInit {

  inputIconName: string = 'add'
  existTodos :ITodo[] | undefined;
  isOpenOption: boolean | undefined;
  todoOptionSelected!: ITodo;
  isDetailMode: boolean = false;
  changeText: boolean = false
  pageTitle: string = 'My Day';
  isMenuOpen: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private todosService: TodosService,
    private platformCtrl: Platform,
   
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( param => {
      if (param.has('id')) {
        
        switch (param.get('id')){
          case 'myday':
            this.pageTitle = 'My Day';
            this.existTodos = this.todosService.getActiveUserTodos();
            break;
          case 'important':
            this.pageTitle = 'Important Tasks';
            this.existTodos = this.todosService.getImportantTodos();
            break;
          case 'completed':
            this.pageTitle = 'Completed Tasks';
            this.existTodos = this.todosService.getCompletedTodos();
            break;
          default:
            break;
        }
      }
    })

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

  checkScreenSize(): boolean{
    let response: boolean; 
    if(this.platformCtrl.width() < 768 ){
      response = true;
    }else {
      response = false;
    }
    return response; 
  }


}
