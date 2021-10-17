import { Component, OnInit } from '@angular/core';
import { User } from '../usuarios/clase/user';
import { UserServService } from '../usuarios/servicio/user-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario :any;
  constructor(private userService: UserServService) { 

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(response => {
      this.usuario = response;
    })
  }

}
