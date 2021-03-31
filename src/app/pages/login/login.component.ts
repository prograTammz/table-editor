import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  constructor(public fb: FormBuilder, private auth: LoginService) { }

  ngOnInit(): void {
    this.constructLoginForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  constructLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    let isValid = this.auth.login(this.f.username.value, this.f.password.value);

    if(!isValid) {
      this.f.username.setErrors({ loginError: true });
      this.f.password.setErrors({ loginError: true });
    }
  }

  onChange() {
    this.f.username.setErrors({ loginError: null });
    this.f.password.setErrors({ loginError: null });
    this.f.username.updateValueAndValidity();
    this.f.password.updateValueAndValidity();
  }

}
