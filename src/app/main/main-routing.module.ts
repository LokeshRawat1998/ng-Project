import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponentComponent,
    children: [
      { path: 'index', loadChildren: './index/index.module#IndexModule' },
      { path: 'master', loadChildren: './master/master.module#MasterModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
