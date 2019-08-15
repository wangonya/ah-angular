import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import {NzMessageService, NzOverlayModule} from 'ng-zorro-antd';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    // imports: [ Overlay ],
    providers: [ NzMessageService, NzOverlayModule, Overlay ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  }));

  // it('should be created', () => {
  //   const service: MessageService = TestBed.get(MessageService);
  //   expect(service).toBeTruthy();
  // });
});
