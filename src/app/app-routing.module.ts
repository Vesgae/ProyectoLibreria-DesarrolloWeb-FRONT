import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', loadChildren: () => import('./modules/books/books.module').then(mod => mod.BooksModule)},
  {path:'users', loadChildren: () => import('./modules/users/users.module').then(mod => mod.UsersModule), canActivate: [AuthGuard] },
  {path:'books', loadChildren: () => import('./modules/books/books.module').then(mod => mod.BooksModule), canActivate: [AuthGuard] },
  {path:'login', loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
