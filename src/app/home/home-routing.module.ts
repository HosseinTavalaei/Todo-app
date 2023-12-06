import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[

      {
        path: ':id',
        loadChildren: () => import('./display-todos/display-todos.module').then( m => m.DisplayTodosPageModule)
      },{


        path: '',
        redirectTo: 'myday',
        pathMatch: 'full'
      }
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
