import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from '../shared/navbar/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public nav: NavbarService, private route: Router) {
  }

  ngOnDestroy() {
    this.nav.show();
  }

  ngOnInit() {
    this.nav.hide();
  }

}
