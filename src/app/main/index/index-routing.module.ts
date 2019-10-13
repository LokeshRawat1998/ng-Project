import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponentComponent } from './index-component/index-component.component';
import { IndexLink1Component } from './index-link1/index-link1.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponentComponent,
    children: [
      { path: 'indexlink1', component: IndexLink1Component }
      // {path: 'index/indexlink2', component: IndexLink2Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule {}
