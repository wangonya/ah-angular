import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../_services';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {
  message: Subject<object> = this.messageService.message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
