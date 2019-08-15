import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  createMessage(type: string, content: string): void {
    this.message.create(type, content);
  }

  constructor(private message: NzMessageService) {}
}
