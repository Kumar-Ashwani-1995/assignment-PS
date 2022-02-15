import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css']
})
export class RouteOneComponent implements OnInit ,AfterViewChecked{
  counter=0;
  size=640;
  box: any;
  imagebox:any;
  image: any;
  constructor() {
    
   }
  ngAfterViewChecked(): void {
    
  }

  ngOnInit(): void {
    this.imagebox=document.querySelectorAll(".slider img");
    this.image=document.querySelector(".slider");
    console.log(this.imagebox.length,this.counter%(this.imagebox.length));

    setInterval(()=>{
     this.next();
    },4000)

  }
  next(){
    
    if(this.counter==this.imagebox.length-1){
      // this.image.style.transition="none";
      this.counter=-1;
    }
    else{
      this.image.style.transition="transform 0.4s ease-in-out";

    }
        this.counter++;
        this.image.style.transform="translateX("+(-this.size*(this.counter))+"px)";
       
  }
  prev(){
    
    if(this.counter==0){
      this.counter=this.imagebox.length;
      // this.image.style.transition="none";
    }
    else{
      this.image.style.transition="transform 0.4s ease-in-out";
    }
        this.counter--;
        this.image.style.transform="translateX("+(-this.size*(this.counter))+"px)";
       
  }

}
