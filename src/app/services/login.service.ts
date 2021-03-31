import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public token: any;
  public storage: Storage;
  constructor(private router: Router) { 
    this.storage = window.sessionStorage;
    this.token = JSON.parse(this.storage.getItem('token'));
  }


  //Creates a dummy Token and stores it in the session storage and routes to welcome page
  login(username: string, password: string): boolean {
    let isValid: boolean = false;
    //Checks normal user;
    if(username === 'user' && password === 'user') {
      isValid = true;
      this.generateToken(username,'user');
      this.router.navigate(['app','welcome']);
    }
    //check admin user;

    if(username === 'admin' && password === 'admin') {
      isValid = true;
      this.generateToken(username,'admin');
      this.router.navigate(['app','tableEditor']);
    }

    return isValid;
  }

  //Removes the dummy token and routes to login page
  logout() {
    this.storage.removeItem('token');
    this.router.navigate(['login']);
  }

  generateToken(username: string, role: string){
    const token: Object = {username, role};
    this.token = token;
    const tokenString: string = JSON.stringify(token);
    this.storage.setItem('token', tokenString);
  }
}
