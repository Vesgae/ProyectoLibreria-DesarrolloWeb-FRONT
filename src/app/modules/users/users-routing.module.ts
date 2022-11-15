import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path:'',component: ListUsersComponent, canActivate: [AuthGuard] },
  {path:'add-user',component: CreateUserComponent, canActivate: [AuthGuard] },
  {path:'modify-user',component: EditUserComponent, canActivate: [AuthGuard] },
  {path:'delete-user',component: DeleteUserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
