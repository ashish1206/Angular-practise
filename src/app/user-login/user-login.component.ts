import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../Models/User'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userLoginService: UserLoginService,
    private route: Router) { }

  ngOnInit(): void {
    this.user = new User();

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    this.user = this.loginForm.value as User;
    this.userLoginService.login(this.user).subscribe(
      (response) => {
        this.user = response;
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.route.navigate(['/user/home']);
      }
    )
  }

}