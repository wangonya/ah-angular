import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message = new Subject<object>();

  constructor() {}

  showMessage(type, message) {
    this.message.next({ type, message});
  }
}
