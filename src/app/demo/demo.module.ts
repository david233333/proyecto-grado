
import { DemoRoutingModule } from './demo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ButtonsComponent, 
    FlexboxComponent],

  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DemoRoutingModule,
    FlexLayoutModule,
  
    

  ],
  
})
export class DemoModule { 
  
}
