import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBooksComponent } from './list-books/list-books.component';

const routes: Routes = [
  {path:'',component: ListBooksComponent},
  {path:'add-book',component: CreateBookComponent, canActivate: [AuthGuard] },
  {path:'modify-book',component: EditBookComponent,canActivate: [AuthGuard] },
  {path:'delete-book',component: DeleteBookComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
