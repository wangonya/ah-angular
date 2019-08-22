import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rootUrl = 'https://ah-django-staging.herokuapp.com/api';
  headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  constructor(private httpClient: HttpClient) { }

  public getRequest(endpoint) {
    return this.httpClient.get(`${this.rootUrl}/${endpoint}`, {headers: this.headers});
  }

  public postRequest(endpoint, data) {
    return this.httpClient.post(`${this.rootUrl}/${endpoint}`, data, {headers: this.headers});
  }
}
