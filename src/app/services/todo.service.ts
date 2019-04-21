import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './../models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string;

  constructor(
    public http: HttpClient
  ) {
    this.apiUrl = environment.API_URL + 'todo';
  }

  /**
   * Lấy danh sách các tasks
   */
  getTodoList() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTYzODYwMDEsImlkIjozLCJ1c2VybmFtZSI6InZ1bmIyIn0'
        + '.rod-sbsHwoQC3C7ur78YS690d433L8805Y6p7z2_Pog')
    };

    return this.http.get<Array<Todo>>(this.apiUrl, header);
  }

}
