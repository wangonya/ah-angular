import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {MessageService} from '../_services';
import {HomeComponent} from '../home/home.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let mockReq;
  let router: Router;
  let messageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'home', component: HomeComponent }
      ]), ],
      declarations: [ SigninComponent, HomeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
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

  it('should make request to log in user on form submit', () => {
    const response = {
      user: {
        token: 'test-token'
      }
    };

    const navigateSpy = spyOn(router, 'navigate');

    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);

    mockReq = httpMock.expectOne('https://ah-django-staging.herokuapp.com/api/users/login');

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toEqual('POST');

    mockReq.flush(response);
  });

  it('should pass errors to messageService', async(() => {
    const messageServiceSpy = spyOn(messageService, 'showMessage')
      .withArgs('error', 'Log in failed. Please check your credentials and try again.').and.callThrough();
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    mockReq = httpMock.expectOne('https://ah-django-staging.herokuapp.com/api/users/login');
    mockReq.error(new ErrorEvent('fail'));
    expect(messageServiceSpy).toHaveBeenCalled();
  }));
});
