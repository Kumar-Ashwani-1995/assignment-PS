import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit,OnDestroy {
  arrClick:any=[];
  startedSub: any;
  pausedSub: any;

  constructor(private service:TransferService) { }
  getTime(){
    var datePipe = new DatePipe('en-US');
    let current = new Date();
    let dateToSet = datePipe.transform(current, 'dd-MM-yyyy hh:mm:ss a');
    
    // let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    // let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    // let dateTime = cDate + ' ' + cTime;
    return dateToSet;
  }
  ngOnInit(): void {
    this.startedSub=this.service.started.subscribe((x)=>{
      
      
      if(x!=="reset"){
        // this.arrClick=[]
        this.arrClick.push("Started at " + x)

      }
      else{
        let TimeStamp=this.getTime();
        this.arrClick.push("Reset at " + TimeStamp)

      }
    })
    this.pausedSub=this.service.paused.subscribe((x)=>{
      
      
      if(x!=="reset"){
        this.arrClick.push("Paused at " + x)
      }
    })
  }
  reset(){
    this.arrClick=[]
  }
  ngOnDestroy(): void {
    this.startedSub.unsubscribe();
    this.pausedSub.unsubscribe();
  }
}
