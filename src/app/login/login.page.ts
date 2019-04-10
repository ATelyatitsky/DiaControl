import { Component, OnInit } from '@angular/core';
import {AutorisationService} from '../Services/autorisation.service';
import {Keyboard} from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private autorisationService: AutorisationService,
              private keyboard: Keyboard) { }
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
