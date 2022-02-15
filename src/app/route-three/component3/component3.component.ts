import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit , OnChanges{
  arrClick:any=[];
  constructor() { }
  @Input() startPauseArrayVal: any;
  ngOnInit(): void {
  }
  reset(){
    this.arrClick=[];
  }
  ngOnChanges(changes: SimpleChanges): void {
    let currentVal:any=changes.startPauseArrayVal.currentValue;
    console.log(currentVal);
    if(currentVal){
      //if(currentVal["opr"]!=="reset"){
        this.arrClick.push(currentVal["opr"]+" at " + currentVal["time"])
      // }
      // else{
        //this.arrClick=[];
      // }
    }
  }

}
