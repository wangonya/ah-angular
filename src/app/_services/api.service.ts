import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getArticles() {
    return this.httpClient.get(`https://ah-django-staging.herokuapp.com//api/articles/feed/`);
  }
}
