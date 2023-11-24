import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'myday',
        loadChildren: () => import('./myday/myday.module').then( m => m.MydayPageModule)
      },
      {
        path: 'important',
        loadChildren: () => import('./important/important.module').then( m => m.ImportantPageModule)
      },
      {
        path: 'mytasks',
        loadChildren: () => import('./mytasks/mytasks.module').then( m => m.MytasksPageModule)
      }
    ]
  },
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
