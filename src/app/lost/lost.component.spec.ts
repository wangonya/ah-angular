import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { NzResultModule } from 'ng-zorro-antd/result';

import { LostComponent } from './lost.component';

describe('LostComponent', () => {
  let component: LostComponent;
  let fixture: ComponentFixture<LostComponent>;
  let element;
  let button;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NzResultModule ],
      declarations: [ LostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  describe('Back Home button', () => {

    beforeEach(() => {
      button = element.querySelector('button');
    });

    it(`should exist with 'Back Home' as text`, () => {
      expect(button.textContent).toBe('Back Home');
    });
  });
});
