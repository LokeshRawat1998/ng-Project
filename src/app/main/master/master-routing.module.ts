import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponentComponent } from './master-component/master-component.component';
import { MasterLink1Component } from './master-link1/master-link1.component';
import { MasterLink2Component } from './master-link2/master-link2.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponentComponent,
    children: [
      { path: 'masterlink1', component: MasterLink1Component },
      { path: 'masterlink2', component: MasterLink2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
