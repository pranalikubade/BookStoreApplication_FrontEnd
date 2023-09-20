import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  // getBooks(): Observable<any>{
  //   return this.http.get('http://localhost:8080/book/allBooks');
  // }

}
