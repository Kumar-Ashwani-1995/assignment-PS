import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: any,limit:number): any {
    if(value.length>limit){
      return value.substr(0,limit)+" ...";
    }
    else{
      return value
    }
  }

}
