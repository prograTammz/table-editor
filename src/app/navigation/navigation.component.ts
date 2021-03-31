import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('sideNav') sideNav: MatSidenav;
  // View States
  public viewWidth: number;
  public isDesktop: boolean;
  public isAdmin: boolean = false;

  constructor(public router: Router, private auth: LoginService) { }

  ngOnInit(): void {
    // Getting view width while init
    this.viewWidth = window.innerWidth;
    
    if (this.viewWidth > 1280) {
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && !this.isDesktop) {
        this.sideNav.close();
      }
    });

    this.isAdmin = this.auth.token?.role === 'admin';
  }

  logout() {
    this.auth.logout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.viewWidth = event.target.innerWidth;
    this.isDesktop = false;
    if (this.viewWidth > 1280) {
      this.isDesktop = true;
    }
  }

  resetPosition() {
    const elm = document.getElementById("page-container");
    elm.scrollTop = 0;
  }

}
