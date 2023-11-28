import { TodoComponent } from './home/todo/todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TodoOptionsComponent } from './home/todo-options/todo-options.component';


@NgModule({
  declarations: [
    TodoComponent, 
    TodoOptionsComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    TodoComponent,
    TodoOptionsComponent
    
  ],
})
export class SharedModule { }
