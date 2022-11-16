export class UserNew{
  name: string;
  email: string;
  password: string;
  birthday: string;
  roles: string[];

  constructor(name: string, email: string, password:string, birthday: string, roles: string[]){
    this.email = email;
    this.name = name;
    this.password = password;
    this.birthday = birthday;
    this.roles = roles;
  }
}
