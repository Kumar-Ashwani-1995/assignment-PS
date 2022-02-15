import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.css']
})
export class RouteSixComponent implements OnInit {
  
  constructor() { }
  box:any;
  clicked:string="";
  ngOnInit(): void {
    this.box=[];
    for (let index = 0; index < 50; index++) {
      this.box.push(index);
    }
    window.onscroll=(e)=>{
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        console.log("end of page, Load more div");
        this.loadMore();
      }
    }
  }
  loadMore(){
    let size=this.box.length
        for (let index = size; index < size+20; index++) {
        this.box.push(index);
        }
  }
  divClicked(ele:any){
    console.log((ele+1) + "th div clicked");
    this.clicked=(ele+1);
    let bodyFade:any=document.querySelector(".inBox")
    bodyFade.style.opacity=0.1;
    bodyFade.style.pointerEvents="none";
    let alertBox:any=document.querySelector(".alert")
    let closeBtn:any=document.querySelector(".closeButton")
    closeBtn.focus();
    alertBox.style.opacity=1;
    alertBox.style.pointerEvents="auto";
    
  }
  close(){
    let alertBox:any=document.querySelector(".alert")
    alertBox.style.opacity=0;
    alertBox.style.pointerEvents="none";
    let bodyFade:any=document.querySelector(".inBox")
    bodyFade.style.opacity=1;
    bodyFade.style.pointerEvents="auto";
  }
  

}
