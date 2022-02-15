import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteTwoRoutingModule } from './route-two-routing.module';
import { RouteTwoComponent } from './route-two.component';
import { HttpClientModule } from '@angular/common/http';
import { ShortenTextPipe } from '../shorten-text.pipe';


@NgModule({
  declarations: [
    RouteTwoComponent,
    ShortenTextPipe
  ],
  imports: [
    CommonModule,
    RouteTwoRoutingModule,
    HttpClientModule
  ]
})
export class RouteTwoModule { }
