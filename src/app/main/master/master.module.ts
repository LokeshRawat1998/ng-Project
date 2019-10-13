import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponentComponent } from './master-component/master-component.component';
import { MasterLink1Component } from './master-link1/master-link1.component';
import { MasterLink2Component } from './master-link2/master-link2.component';

@NgModule({
  declarations: [MasterComponentComponent, MasterLink1Component, MasterLink2Component],
  imports: [CommonModule, MasterRoutingModule]
})
export class MasterModule {}
