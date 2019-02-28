import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelRoutingModule} from './panel-routing.module';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule {
}
