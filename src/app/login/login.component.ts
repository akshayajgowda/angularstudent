import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username;
password;
  constructor(private router:Router) { }

  
  onLogin(){
    if(this.username==this.password){
     
        this.router.navigate(['/HomeComponent']);
    }

  }

  ngOnInit() {
  }

}
