import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit,OnDestroy {
  setInterval_ID: any;
  settimeOut: any;
  Strt: boolean=true;
  counttime: any;
  wasPaused: boolean=false;
  pausedArray:any=[];
  buttonName="Start"

  myForm!:NgForm;
  constructor() { }
  @Output() counter=new EventEmitter<any>();
  @Output() StartPauseArr=new EventEmitter<any>();
  ngOnDestroy(): void {
    clearTimeout(this.settimeOut);
    clearInterval(this.setInterval_ID);
  }

  ngOnInit(): void {
  }
  StartPause(myForm:NgForm){
    let entertime:any;
    console.log(myForm.value.enterTime)
    let TimeStamp=this.getTime();
    //console.log(TimeStamp)
    if(this.Strt){

      // this.service.started.next(TimeStamp)
      this.buttonName="Resume"
      this.StartPauseArr.emit({opr:"started",time:TimeStamp})

      if(this.wasPaused){
        //console.log(this.counttime);
        
        this.counterStart(this.counttime)
        this.wasPaused=false;
      }
      else{
        
          this.counterStart(myForm.value.enterTime)
          
      }
    }
    else{

      //     this.service.paused.next(TimeStamp)
      this.StartPauseArr.emit({opr:"paused",time:TimeStamp})

          clearTimeout(this.settimeOut);
          clearInterval(this.setInterval_ID);
          this.pausedArray.push("Paused at " + (this.counttime) +"s")
          this.wasPaused=true;
        }
        this.Strt=!this.Strt;
      
  }
  reset(){
    clearTimeout(this.settimeOut);
    clearInterval(this.setInterval_ID);
    let TimeStamp=this.getTime();
    // this.service.started.next("reset")
    // this.service.paused.next("reset")
    this.StartPauseArr.emit({opr:"reset",time:TimeStamp})


    // this.service.counterVal.next(0)
    this.counter.emit(0);
    this.buttonName="Start"
    this.Strt=true;
    this.wasPaused=false;
    this.pausedArray=[];
    this.counttime=0;
  }
  counterStart(exeTime:any){
    clearTimeout(this.settimeOut);
    clearInterval(this.setInterval_ID);
    //console.log(exeTime)
    this.counttime=exeTime;
    this.setInterval_ID = setInterval(()=>{
      //console.log(this.counttime)

      // this.service.counterVal.next(this.counttime)
      this.counter.emit(this.counttime)
      
      this.counttime=this.counttime-1;
    }, 1000);
    this.settimeOut=setTimeout(()=>{
      clearInterval(this.setInterval_ID)  
      this.Strt=true;
      this.reset();
      }, (exeTime+1)*1000);
  
  }

  getTime(){
    var datePipe = new DatePipe('en-US');
    let current = new Date();
    let dateToSet = datePipe.transform(current, 'dd-MM-yyyy hh:mm:ss a');
    
    // let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    // let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    // let dateTime = cDate + ' ' + cTime;
    return dateToSet;
  }
}
