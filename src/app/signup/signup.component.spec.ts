import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {MessageService} from '../_services';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let mockReq;
  let router: Router;
  let messageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([]), ],
      declarations: [ SignupComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    router = TestBed.get(Router);
    messageService = TestBed.get(MessageService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make request to log in user on form submit', async(() => {
    const response = {
      user: {
        data: {token: 'test-token'},
      }
    };

    const navigateSpy = spyOn(router, 'navigate');

    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);

    mockReq = httpMock.expectOne('https://ah-django-staging.herokuapp.com/api/users');

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toEqual('POST');

    mockReq.flush(response);
  }));
});
