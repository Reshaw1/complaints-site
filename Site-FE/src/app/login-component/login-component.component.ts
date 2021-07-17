import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../models/Person';
import { SysUser } from '../models/SysUser';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  @Output("onLogin") login = new EventEmitter<any>();

  UserLogin: boolean = true;
  UserRegister: boolean = false;

  user: SysUser
  Users: SysUser[] = [];

  logUser: SysUser;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.logUser = new SysUser;
    this.logUser.person = new Person;
    this.loginService.getUsers().subscribe((res: any) => {
      for(let i of res) {
        this.user = new SysUser();
        this.user.person = new Person();
        this.user.ID = i[0],
        this.user.userName = i[1],
        this.user.password = i[2],
        this.user.person.ID = i[3],
        this.user.userState = i[4],
        this.user.userType = i[5],
        this.Users.push(this.user);
      }
      console.log(this.Users);
    })
  }

  onLogin() {
    for(let user of this.Users){
      if(this.logUser.userName == user.userName && this.logUser.password == user.password) {
        this.login.emit([user.person.ID, user.userType])
        break
      }
    }
  }

  onRegister() {
    this.logUser.person.idCard = this.logUser.person.idCard.replace("-", "").replace("-", "")
    this.logUser.person.phone = this.logUser.person.phone.replace("+", "")
    this.logUser.userState = 1;
    this.logUser.userType = 1;
    console.log(JSON.parse(JSON.stringify(this.logUser)))
    this.loginService.createUser(this.logUser).subscribe(
      res => {
        console.log(res);
        window.alert("Se ha insertado correctamente");
      }
    )
  }

  onUserLogin() {
    this.UserRegister = false;
    this.UserLogin = true
  }

  onUserRegister() {
    this.UserRegister = true;
    this.UserLogin = false
  }



}
