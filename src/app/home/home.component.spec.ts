import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { HomeComponent } from './home.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ImgFallbackModule, HttpClientTestingModule ],
      declarations: [ HomeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
