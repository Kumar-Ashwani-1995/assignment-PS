import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.css']
})
export class RouteThreeComponent implements OnInit {

  constructor() { }
  counterVal:any=0;
  startPauseArray:any;
  ngOnInit(): void {
  }

}
