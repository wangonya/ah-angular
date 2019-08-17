import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rootUrl = 'https://ah-django-staging.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  public getRequest(endpoint) {
    return this.httpClient.get(`${this.rootUrl}/${endpoint}`);
  }

  public postRequest(endpoint, data) {
    return this.httpClient.post(`${this.rootUrl}/${endpoint}`, data);
  }
}
