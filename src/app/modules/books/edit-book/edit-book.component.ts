import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  books: Book[] = [];


  constructor(private bookService:BookService,private formBuilder:FormBuilder) { }
  crearlibroForm = this.formBuilder.group({
    title: '',
    editorial: '',
    cover_url: '',
    description:'',
    publication_year: '',
    volume:''
  });
  ngOnInit(): void {
    this.bookService.searchAllBooks().subscribe(
      (data:Book[]) =>{
        this.books = data;

      }
    )
  }
  onSubmit():void{

  }
  editarLibro():void{

  }
}
