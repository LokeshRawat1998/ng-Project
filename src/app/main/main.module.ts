import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponentComponent } from './main-component/main-component.component';
import { HeaderComponent } from './header/header.component';
//  import { MasterComponentComponent } from './master-component/master-component.component';
// import { MasterLink1Component } from './master-link1/master-link1.component';

@NgModule({
  declarations: [MainComponentComponent, HeaderComponent],
  imports: [CommonModule, MainRoutingModule]
})
export class MainModule {}
