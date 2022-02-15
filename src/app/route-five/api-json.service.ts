import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  *  as  data  from  './StudentList.json';

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {
  students=[
    {name:"Ashwani",class:10,section:"A","subject 1":"Math","subject 2":"Commerce","subject 3":"Hindi"},
    {name:"Ram",class:11,section:"B","subject 1":"Math","subject 2":"Biology","subject 3":"Chemistry"},
    {name:"Ravi",class:10,section:"C","subject 1":"Biology","subject 2":"Physic","subject 3":"Hindi"},
    {name:"Karan",class:12,section:"C","subject 1":"Commerce","subject 2":"Physic","subject 3":"Chemistry"},
    {name:"Arjun",class:9,section:"B","subject 1":"Hindi","subject 2":"Biology","subject 3":"Math"},
    {name:"Raj",class:10,section:"A","subject 1":"Math","subject 2":"Hindi","subject 3":"Physic"}
  ]
  constructor(private http:HttpClient) { }
}
