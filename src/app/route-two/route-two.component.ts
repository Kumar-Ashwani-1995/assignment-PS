import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';
import  *  as  data  from  './product.json';
@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.css']
})
export class RouteTwoComponent implements OnInit {
  product:any;
  countNUM: any;
  constructor(private http:HttpClient) { }
  

  ngOnInit(): void {
  //   this.http.get("https://fakestoreapi.com/products").subscribe((data)=>{
  //     this.product=data;
  //   },(err)=>{console.log(err)})
  // }
  console.log(Array.from(data))
  this.product=Array.from(data);
  this.product=this.product.map((x:any)=>{
    return {...x,count:0}
  })
  console.log(this.countNUM);
  
  let listButton:any=document.querySelector(".list");
    listButton.style.backgroundColor="rgba(16, 24, 32, 0.795)";
    listButton.style.color="white";
  }
  
  addProd(fid:any){
    for (let index = 0; index < this.product.length; index++) {
      if(this.product[index]["id"]==fid){
        this.product[index]["count"]+=1;
        break;
      }
    }
  }
  removeProd(fid:any){
    for (let index = 0; index < this.product.length; index++) {
      if(this.product[index]["id"]==fid && this.product[index]["count"]>0){
        this.product[index]["count"]-=1;
        break;
      }
    }
  }

  grid4(){
    let four:any=document.querySelector(".box-container");
    four.style.gridTemplateColumns="repeat(4,minmax(200px,3fr))";
    let gridButton:any=document.querySelector(".grid");
    gridButton.style.backgroundColor="rgba(16, 24, 32, 0.795)";
    gridButton.style.color="white";
    let listButton:any=document.querySelector(".list");
    listButton.style.backgroundColor="white";
    listButton.style.color="black";
  }
  list2(){
    let four:any=document.querySelector(".box-container");
    four.style.gridTemplateColumns="6fr 6fr";
    let gridButton:any=document.querySelector(".grid");
    gridButton.style.backgroundColor="white";
    gridButton.style.color="black";
    let listButton:any=document.querySelector(".list");
    listButton.style.backgroundColor="rgba(16, 24, 32, 0.795)";
    listButton.style.color="white";
  }
  comparePrice(a:any, b:any) {
    if (a.price > b.price) return 1;
    else if (a.price < b.price) return -1;
    return 0;
  }
  compareRating(a:any, b:any) {
    if (a.rating.rate > b.rating.rate) return 1;
    else if (a.rating.rate < b.rating.rate) return -1;
    else if (a.rating.rate == b.rating.rate){
      if (a.rating.count > b.rating.count) return 1;
      else if (a.rating.count < b.rating.count) return -1;
    } 
    return 0;
  }
  // getdescription(text:any){
  //   if(text && text.length>15){
       
  //      let result =text.substring(0, 45);
  //      return result+"..."
  //   }
  //   else{
  //     return text
  //   }
    
  // }
  sort(event:any){
    console.log(event.target.value)
    if(event.target.value=="LowToHigh"){
      this.product.sort(this.comparePrice);
    }
    else if(event.target.value=="HighToLow"){
      this.product.sort(this.comparePrice);
      this.product.reverse();
    }
    else if(event.target.value=="Popularity"){
      this.product.sort(this.compareRating);
      this.product.reverse();
    }
    
    //console.table(this.product)
  }

  
}
