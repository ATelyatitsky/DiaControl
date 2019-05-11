import { Component, OnInit } from '@angular/core';
import {AutorisationService} from '../Services/autorisation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private autorisationService: AutorisationService) { }
  public noBlur = true;
  ngOnInit() {
      window.addEventListener('keyboardWillShow', data => {
          this.noBlur = false;
      });
      window.addEventListener('keyboardWillHide', data => {
          this.noBlur = true;
      });
  }
    redirectToRegistrationPage(path: string): void {
        this.autorisationService.redirectTo(path);
    }
}
