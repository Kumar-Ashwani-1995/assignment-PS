import { Component, OnInit } from '@angular/core';
import { ApiJsonService } from './api-json.service';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.css']
})
export class RouteFiveComponent implements OnInit {
  header!: string[];
  studentCopy!: { name: string; class: string; section: string; sub1: string; sub2: string; sub3: string; }[];
  sortType: any={};
  students!: any;
  modelName:any={};

  constructor(private service:ApiJsonService) {}

  ngOnInit(): void {
    this.students= this.service.students;
    this.studentCopy=JSON.parse(JSON.stringify(this.students))
    console.log(this.studentCopy);
    
    if(this.students.length>0){
      this.header=Object.keys(this.students[0]);
    }
    for (let i of this.header) {
      this.sortType[i]=1
    }
    console.log(this.sortType);
    
  }
  getSymbol(val:any){
    console.log(val);
    for(let i in this.modelName){
      this.modelName[i]=""
    }
    if(this.sortType[val]%3==1){
      this.modelName[val]= "▼";
    }
     else if(this.sortType[val]%3==2) {
      this.modelName[val]= "▲";
     }
     else{
      this.modelName[val]= "";
     }
  }
  sort(val:any){
    console.log(this.sortType,this.sortType[val])
    this.getSymbol(val);
    this.students=JSON.parse(JSON.stringify(this.studentCopy))
    if(this.sortType[val]%3==0){
      this.sortType[val]=this.sortType[val]+1;
      return this.students 
    }

    console.log(val);
    let arr=this.students.map((data:any)=>{
      if (typeof data[val] === 'number') {
        return data[val]
      }
      if(data[val]){
        return data[val].toUpperCase() 
      }
    })
    console.log(arr.sort());
    let setVal=Array.from(new Set(arr.sort(function(a:any, b:any){return a-b})));
    console.log(setVal)
    let sorted:any=[];
    for (let index = 0; index < setVal.length; index++) {
      sorted=sorted.concat(this.students.filter((x:any)=>{
        //console.log(setVal[index],x[val])
        let compare:any;
        if (typeof x[val] == 'number') {
           compare=x[val]
        }
        else{
          compare=x[val].toUpperCase()
        }
        if(setVal[index]==compare ){
          return true
        }
        else{
          return false
        }
      }))
    }
    if(this.sortType[val]%3==1){
      this.sortType[val]=this.sortType[val]+1;
      this.students=sorted.reverse()
      return this.students 
    }
    if(this.sortType[val]%3==2){
      this.sortType[val]=this.sortType[val]+1;
      this.students=sorted
      return this.students 
    }
    return this.students
  }
  
  getValue(hr:any,student:any){
    if(student[hr]){
      return student[hr]
    }
    else{
      return "NA"
    }
    
  }

}
