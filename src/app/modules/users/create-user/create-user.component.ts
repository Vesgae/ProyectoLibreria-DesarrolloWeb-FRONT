import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserNew } from 'src/app/models/user-new';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  crearusuarioForm = this.formBuilder.group({
    name: '',
    birthday: '',
    password: '',
    email: '',
    role:''
  });
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private newUser: UserNew) {
  }

  ngOnInit(): void {

    let nameParam: string;
    let birthdayParam: string;
    let roleParam:string;
    let passwordParam: string;
    let emailParam: string

    nameParam = ''+this.crearusuarioForm.value.name;
    birthdayParam = ''+this.crearusuarioForm.value.birthday;
    roleParam = ''+this.crearusuarioForm.value.role;
    passwordParam = ''+this.crearusuarioForm.value.password;
    emailParam = ''+this.crearusuarioForm.value.email;
    console.log('FormValue:', this.crearusuarioForm.value);



    this.crearusuarioForm.reset();

    

    /* this.loginService.login(userParam, passParam).subscribe(
                        data => {
                                  console.log(data);
                                  this.loginService.setToken(data.token);
                                  this.router.navigateByUrl('/');
                                }); */

  }
  onSubmit():void{

  }

  createUser(){
    this.newUser.birthday = ''+this.crearusuarioForm.value.birthday;
    this.newUser.name = ''+this.crearusuarioForm.value.name;
    this.newUser.email = ''+this.crearusuarioForm.value.email;
    this.newUser.password = ''+this.crearusuarioForm.value.password;
    this.newUser.roles.push(''+this.crearusuarioForm.value.role);

  }

}
