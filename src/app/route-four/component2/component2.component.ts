import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  setInterval_ID: any;
  settimeOut: any;
  Strt: boolean=true;
  counttime: any;
  wasPaused: boolean=false;
  pausedArray:any=[];
  constructor(private service:TransferService) { }
  myForm!:NgForm;
  buttonName="Start"
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    clearTimeout(this.settimeOut);
    clearInterval(this.setInterval_ID);
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
  StartPause(myForm:NgForm){
    if(!myForm.value.enterTime){
      return false
    }
    let entertime:any;
    console.log(myForm)
    let TimeStamp=this.getTime();
    console.log(TimeStamp)
    if(this.Strt){
      this.buttonName="Resume"
      this.service.started.next(TimeStamp)
      if(this.wasPaused){
        console.log(this.counttime,123);
        
        this.counterStart(this.counttime)
        this.wasPaused=false;
      }
      else{
        this.counterStart(myForm.value.enterTime)
        // myForm.form.patchValue({
        //   enterTime:0
        // })
      }
      
    }
    else{
      this.service.paused.next(TimeStamp)
      clearTimeout(this.settimeOut);
      clearInterval(this.setInterval_ID);
      this.pausedArray.push("Paused at " + (this.counttime) +"s")
      this.wasPaused=true;
    }
    this.Strt=!this.Strt;
    return true
  }
 
  counterStart(exeTime:any){
    clearTimeout(this.settimeOut);
    clearInterval(this.setInterval_ID);
    console.log(exeTime)
    this.counttime=exeTime;
    this.setInterval_ID = setInterval(()=>{
      console.log(this.counttime)
      this.service.counterVal.next(this.counttime)
      this.counttime=this.counttime-1;
    }, 1000);
    this.settimeOut=setTimeout(()=>{
      this.Strt=true;
    clearInterval(this.setInterval_ID);
    this.reset();
  }, (exeTime+1)*1000);
  
  }
  reset(){
    clearTimeout(this.settimeOut);
    clearInterval(this.setInterval_ID);
    this.service.started.next("reset")
    this.service.paused.next("reset")
    this.service.counterVal.next(0)
    this.Strt=true;
    this.wasPaused=false;
    this.pausedArray=[];
    this.buttonName="Start"
    
  }

}
