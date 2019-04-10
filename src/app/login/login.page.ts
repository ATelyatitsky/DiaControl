import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AutorisationService} from '../Services/autorisation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private autorisationService: AutorisationService) { }

  ngOnInit() {
  }

    redirectToRegistrationPage(path: string): void {
        this.autorisationService.redirectTo(path);
    }
}
