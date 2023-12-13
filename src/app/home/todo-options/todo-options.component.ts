import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ISubTodo, ITodo } from 'src/app/auth/Database';
import { TodosService } from '../todos.service';
import { StepMenuComponent } from './step-menu/step-menu.component';
import { AlertController, PopoverController } from '@ionic/angular';
import { ISepratedDate } from '../date-picker/time-model';

@Component({
  selector: 'app-todo-options',
  templateUrl: './todo-options.component.html',
  styleUrls: ['./todo-options.component.scss'],
})
export class TodoOptionsComponent{
  
  @Input() todo: ITodo | undefined;
  @Output() public isOpen = new EventEmitter<boolean>();
  inputIconName: string = 'add';
  todoItem: string = 'todo-item-detail';
  isDetailMode: boolean = true;
  isReminderSet: boolean = false;
  reminderStatus: string = 'none'
  sepratedDate: ISepratedDate | undefined; 
  isAddMyDay: boolean = false;
  constructor(
    private todosService: TodosService,
    private alertCtrl: AlertController,
    public popoverCtrl: PopoverController
  ) {}
  

  addToMyDay(){
    this.isAddMyDay = true;
  }

  removeFromMyDay(e: any){
    e.stopPropagation()
    this.isAddMyDay = false; 
  }
 
  changeInputIcon() {
    if (this.inputIconName === 'add') {
      this.inputIconName = 'ellipse-outline';
    } else {
      this.inputIconName = 'add';
    }
  }

  addNewStep(event: any) {
    let value: string;
    if (event.key === 'Enter') {
      value = event.target.value;

      this.todosService.addNewSubTask(value, this.todo);

      event.target.value = '';
    }
  }

  setToComplete(step: ISubTodo) {
    if (step !== undefined) {
      if (step.isCompleted !== true) {
        this.todosService.setSubTodoComplete(step);
      } else {
        this.todosService.undoSubTodoComplete(step);
      }
    }
  }

  presentStemMenu(step: ISubTodo, e: any) {
    const todo = this.todo;
    this.popoverCtrl
      .create({
        component: StepMenuComponent,
        event: e,
        showBackdrop: false,
        componentProps: { step, todo },
        cssClass: 'step-menu',
      })
      .then((popEl) => popEl.present());
  }

  deleteTodo(event: any) {
    if (this.todo !== undefined) {
      const todoId: number = this.todo.id;
      this.alertCtrl.create({
        header: 'Delete task',
        message: this.todo.text + ' will be permanently deleted',
        buttons: [
          {
            text: 'Delete',
            handler: () => {

              this.isOpen.emit(false);
              this.todosService.removeTodo(todoId);

            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
          },
        ],
      }).then(alertEL => alertEL.present());
    }
  }

  closeTodoOptionPanel(event:any){
    this.isOpen.emit(false);
  }

  getPickedDate(e: ISepratedDate){
    this.sepratedDate = e
    this.reminderStatus = 'pickDate'
    this.isReminderSet = true
  }

  removeReminder(e: any){
    e.stopPropagation()
    this.reminderStatus = 'none'
    this.isReminderSet = false
  }
}
