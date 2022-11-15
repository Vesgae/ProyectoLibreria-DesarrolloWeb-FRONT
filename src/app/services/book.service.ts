import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  searchAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8082/getbooks");
  }
}
