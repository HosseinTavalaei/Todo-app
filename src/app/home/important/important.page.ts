import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ITodo } from 'src/app/auth/Database';

@Component({
  selector: 'app-important',
  templateUrl: './important.page.html',
  styleUrls: ['./important.page.scss'],
})
export class ImportantPage implements OnInit {
  existTodos: ITodo[] | undefined;

  constructor(
    private todosService: TodosService,
    private alertCtrl: AlertController

  ) { }

  ngOnInit() {
   this.existTodos = this.todosService.getImportantTodos()
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

  setTodoStatusToComplete(todo: ITodo){

    if (todo?.isCompleted === false) {
      this.todosService.setTodoToComplete(todo)
      const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
      soundEffect.play()
    }else{

      this.todosService.undoCompletedTodo(todo)
      const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
      soundEffect.play()
      

    }

  }

  undoIsImportantToFalse(todo: ITodo, event: any){
    let item = event.target.parentElement.parentElement
    this.todosService.undoImportantTodo(todo)
      const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
      soundEffect.play()

      setTimeout(() => {
        item.remove()
      }, 300);
      
  }

}
