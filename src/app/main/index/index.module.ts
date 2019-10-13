import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponentComponent } from './index-component/index-component.component';
import { IndexLink1Component } from './index-link1/index-link1.component';

@NgModule({
  declarations: [IndexComponentComponent, IndexLink1Component],
  imports: [CommonModule, IndexRoutingModule]
})
export class IndexModule {}
