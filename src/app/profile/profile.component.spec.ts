import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let mockReq;
  localStorage.setItem('user', 'test');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make api an request to get profile', () => {
    mockReq = httpMock.expectOne('https://ah-django-staging.herokuapp.com/api/profiles/test/');
    const mockProfile = [{profile: 'Test profile'}];

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toEqual('GET');

    mockReq.flush(mockProfile);
  });

  it('should catch errors and console.log() if any', () => {
    mockReq = httpMock.expectOne('https://ah-django-staging.herokuapp.com/api/profiles/test/');
    console.log = jasmine.createSpy('log');
    mockReq.error(new ErrorEvent('fail'));
    expect(console.log).toHaveBeenCalled();
  });
});
