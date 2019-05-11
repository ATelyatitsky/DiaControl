import { Component, OnInit } from '@angular/core';
import {AutorisationService} from '../Services/autorisation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor( private autorisationService: AutorisationService) { }

  ngOnInit() {
  }

  redirectToLoginPage(path: string) {
    this.autorisationService.redirectTo(path);
  }

}
