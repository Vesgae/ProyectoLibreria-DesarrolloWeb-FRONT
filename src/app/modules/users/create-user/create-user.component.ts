import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  crearusuarioForm = this.formBuilder.group({
    name: '',
    lastname: '',
    birthday: '',
    role:''
  });
  constructor(private formBuilder: FormBuilder, private userService:UserService ) { }

  ngOnInit(): void {
    let nameParam: string;
    let lastnameParam: string;
    let birthdayParam: string;
    let roleParam:string;


    nameParam = ''+this.crearusuarioForm.value.name;
    lastnameParam = ''+this.crearusuarioForm.value.lastname;
    birthdayParam = ''+this.crearusuarioForm.value.birthday;
    roleParam = ''+this.crearusuarioForm.value.role;
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

}
