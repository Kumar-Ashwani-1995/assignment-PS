import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouteFiveRoutingModule } from './route-five-routing.module';
import { RouteFiveComponent } from './route-five.component';
import { ApiJsonService } from './api-json.service';


@NgModule({
  declarations: [
    RouteFiveComponent
  ],
  imports: [
    CommonModule,
    RouteFiveRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiJsonService
  ],
})
export class RouteFiveModule { }
