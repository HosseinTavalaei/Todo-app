import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayTodosPage } from './display-todos.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayTodosPageRoutingModule {}
