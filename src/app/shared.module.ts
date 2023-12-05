import { StepMenuComponent } from './home/todo-options/step-menu/step-menu.component';
import { TodoComponent } from './home/todo/todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TodoOptionsComponent } from './home/todo-options/todo-options.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent, 
    TodoOptionsComponent,
    StepMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  exports: [
    TodoComponent,
    TodoOptionsComponent,
    StepMenuComponent
    
  ],
})
export class SharedModule { }
