import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit , OnChanges{
  startCount=0;
  pauseCount=0;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    let currentVal:any=changes.startPauseVal.currentValue
    let incomingVal:any
    if(currentVal){
      incomingVal=currentVal["opr"];
    }
    
    if(incomingVal == "started"){
      this.startCount+=1;
    }
    else if(incomingVal == "paused"){
      this.pauseCount+=1;
    }
    else{
      // this.startCount=0;
      // this.pauseCount=0;
    }
  }
  reset(){
      
      this.startCount=0;
      this.pauseCount=0;
  }
  @Input() startPauseVal: any;
  ngOnInit(): void {
  }

}
