import { TodosService } from './../todos.service';
import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ITodo } from 'src/app/auth/Database';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() receivedTodo!: ITodo;
  @Input() pageLoc!: string;
  constructor(
    private todosService: TodosService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    console.log('yes');
  }

  setTodoStatusToComplete(todo: ITodo, userLoc: string, event: any) {
    if (todo.isCompleted === false) {
      this.todosService.setTodoToComplete(todo);
      // const soundEffect = new Audio('../../../assets/sound-effects/tunetank.com_click-bell-11.wav')
      // soundEffect.play()
    } else {
      if( userLoc === 'completedPage'){
        let item = event.target.parentElement.parentElement;
        setTimeout(() => {
          item.remove();
        }, 300);
      }

      this.todosService.undoCompletedTodo(todo);
    }
  }

  setTodoStatusToImportant(todo: ITodo, userLoc: string, event: any) {
    if (todo.isImportant === false) {

      this.todosService.setTodoToImportant(todo);

    } else {

      if(userLoc === 'importantPage'){
        let item = event.target.parentElement.parentElement;
        setTimeout(() => {
          item.remove();
        }, 300);
      }
      this.todosService.undoImportantTodo(todo);
    }
  }

  removeTask(id: number, event: any) {
    let item = event.target.parentElement.parentElement;
    this.alertCtrl
      .create({
        header: 'Delete Task ?',
        message: 'Are you sure to delet task',
        buttons: [
          {
            text: 'cancel',
            role: 'cancel',
          },
          {
            text: 'Yes',
            handler: () => {
              this.todosService.removeTodo(id);
              item.remove();
            },
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

}
