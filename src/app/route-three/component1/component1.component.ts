import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit, OnChanges {
  @Input() counterTimer: any=0;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    let currentVal:any=changes.counterTimer.currentValue;
    //console.log(currentVal,changes);
    let bounce:any=document.querySelector(".timer")
    if(currentVal){
      if(currentVal===5){
        
        bounce.style.animation=" bounce 7s normal"
      }
      
    }
    if(currentVal===0){
        
      bounce.style.animation="none"
    }
  }
  ngOnInit(): void {
  }


}
