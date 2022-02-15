import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteThreeRoutingModule } from './route-three-routing.module';
import { RouteThreeComponent } from './route-three.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RouteThreeComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
  ],
  imports: [
    CommonModule,
    RouteThreeRoutingModule,FormsModule, ReactiveFormsModule
  ]
})
export class RouteThreeModule { }
