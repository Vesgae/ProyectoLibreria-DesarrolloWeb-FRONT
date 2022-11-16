import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService:UserService, private authService:AuthService) { }

  ngOnInit(): void {
    this.userService.searchAllUsers().subscribe(
      (data:User[]) =>{
        this.users = data;
      }
    )
  }

  deleteUser(email: string){
    if(this.authService.isAdmin()){
      Swal.fire({
        title: '¿Quiere remover este usuario?',
        text: 'Está a punto de eliminar el usuario.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, elimine el usuario.',
        cancelButtonText: 'No, cancelar.'
      }).then((result) => {
        if (result.value) {
          this.userService.deleteUser(email);
          Swal.fire(
            'Usuario elminado',
            'El usuario se ha eliminado con exito',
            'success'
          );
          this.ngOnInit();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Accion cancelada',
            'El usuario se mantiene :)',
            'error'
          );
        }
      })
    }
    else{
      Swal.fire('No se puede eliminar, no tiene permisos de administrador.');
    }
  }

}
