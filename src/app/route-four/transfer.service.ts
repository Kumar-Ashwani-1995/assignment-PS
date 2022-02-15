import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  counterVal=new Subject();
  started=new Subject();
  paused=new Subject();
  constructor() { }
}
