import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Book[] = [];
  constructor( private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.searchAllBooks().subscribe(
          (data:Book[]) =>{
            this.books = data;

          }
        )
  }
}
