import { TodoComponent } from './home/todo/todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    TodoComponent, 
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    TodoComponent
    
  ],
})
export class SharedModule { }
