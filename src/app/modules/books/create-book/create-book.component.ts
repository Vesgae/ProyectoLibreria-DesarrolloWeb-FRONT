import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  crearlibroForm = this.formBuilder.group({
    title: '',
    editorial: '',
    cover_url: '',
    description:'',
    publication_year: '',
    volume:''
  });
  constructor(private formBuilder: FormBuilder, private userService:UserService ) { }

  ngOnInit(): void {
    let title: string;
    let editorial: string;
    let cover_url: string;
    let description:string;
    let publication_year: string;
    let volume:string;

    title = ''+this.crearlibroForm.value.title;
    editorial = ''+this.crearlibroForm.value.editorial;
    cover_url = ''+this.crearlibroForm.value.cover_url;
    description = ''+this.crearlibroForm.value.description;
    publication_year = ''+this.crearlibroForm.value.publication_year;
    volume = ''+this.crearlibroForm.value.volume;
    console.log('FormValue:', this.crearlibroForm.value);

    this.crearlibroForm.reset();
  }

  onSubmit():void{

  }

}
