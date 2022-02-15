import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit,OnDestroy {
  startedSub: any;
  pausedSub: any;
  constructor(private service:TransferService) { }
  startCount=0;
  pauseCount=0;
  ngOnInit(): void {
    this.startedSub=this.service.started.subscribe((x)=>{
      if(x!=="reset"){
        this.startCount=this.startCount+1

      }
    })
    this.pausedSub=this.service.paused.subscribe((x)=>{
      if(x!=="reset"){
      this.pauseCount=this.pauseCount+1
        
      }
    })
  }
  reset(){
    this.pauseCount=0;
    this.startCount=0;
  }
  ngOnDestroy(): void {
    this.startedSub.unsubscribe();
    this.pausedSub.unsubscribe();
  }

}
