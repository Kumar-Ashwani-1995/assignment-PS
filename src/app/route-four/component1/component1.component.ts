import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit,OnDestroy {
  counterTimer: any=0;
  counterVal: any;

  constructor(private service:TransferService) { }
  ngOnDestroy(): void {
    this.counterVal.unsubscribe();
  }
  
  ngOnInit(): void {
    this.counterVal=this.service.counterVal.subscribe((data)=>{
      this.counterTimer=data;
      let bounce:any=document.querySelector(".timer")
        if(this.counterTimer){
          if(this.counterTimer===5){
            
            bounce.style.animation=" bounce 7s normal"
          }
          
        }
        if(this.counterTimer===0){
           setTimeout(() => {
            bounce.style.animation="none"
           }, 2000);
          
        }
    })
  }

}
