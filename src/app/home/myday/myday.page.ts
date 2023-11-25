import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ITodo } from 'src/app/auth/Database';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myday',
  templateUrl: './myday.page.html',
  styleUrls: ['./myday.page.scss'],
})
export class MydayPage implements OnInit {

  inputIconName: string = 'add'
  existTodos :ITodo[] | undefined;
  constructor(
    private todosService: TodosService,
    private alertCtrl: AlertController
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


  removeTask(id: number, event: any){

    let item = event.target.parentElement.parentElement
    this.alertCtrl.create({
      header: 'Delete Task ?',
      message: 'Are you sure to delet task',
      buttons:[{
        text: 'cancel',
        role: 'cancel'
      },
    {
      text: 'Yes',
      handler: ()=>{
        this.todosService.removeTodo(id)
        item.remove()
      }
    }]
    }).then(alertEl => alertEl.present())

  }

  setTodoStatusToComplete( todo: ITodo){
  
    if (todo.isCompleted === false) {
      this.todosService.setTodoToComplete(todo)
      const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
      soundEffect.play()
    }else{

      this.todosService.undoCompletedTodo(todo)
      const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
      soundEffect.play()
      

    }

  }

  setTodoStatusToImportant(todo: ITodo){

    if (todo?.isImportant === false) {
      this.todosService.setTodoToImportant(todo)
      const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
      soundEffect.play()
    }else{

      this.todosService.undoImportantTodo(todo)
      const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
      soundEffect.play()
     

    }
  }
 
}
