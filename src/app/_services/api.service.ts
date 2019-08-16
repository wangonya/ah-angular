import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rootUrl = 'https://ah-django-staging.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  public request(type, endpoint) {
    return this.httpClient.get(`${this.rootUrl}/${endpoint}`);
  }
}
