import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.searchAllBooks().subscribe(
      (data:Book[]) =>{
        this.books = data;
      }
    )
  }
  eliminarlibro():void{

  }

}
