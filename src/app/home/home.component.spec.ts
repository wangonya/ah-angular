import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let mockReq;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ HomeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    mockReq = httpMock.expectOne('https://ah-django-staging.herokuapp.com/api/articles/feed/');
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make api an request to get articles', () => {
    const mockArticles = [
            {title: 'Test article 1'},
            {title: 'Test article 2'}
          ];

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toEqual('GET');

    mockReq.flush(mockArticles);
  });

  it('should catch errors and console.log() if any', () => {
    console.log = jasmine.createSpy('log');
    mockReq.error(new ErrorEvent('fail'), {status: 404});
    expect(console.log).toHaveBeenCalled();
  });
});
