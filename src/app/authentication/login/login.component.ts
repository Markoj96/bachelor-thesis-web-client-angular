import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../../shared/services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private name = '';
  private password = '';
  private errorMessage = '';

  constructor(private authenticationService: AuthenticationService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  public createLoginForm() {
    this.loginForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required])
    });
  }

  public onSubmit() {
    this.authenticationService.loginUser(this.loginForm.value)
      .subscribe(
        response => {
          this.storageService.saveToken(response['authorization'].token);
          this.router.navigate(['/home']);
          console.log(response);
        },
        error => {
          let errorMessage = error.error.message;
          errorMessage = errorMessage.replace(/"/g, '');
          this.errorMessage = '* ' + errorMessage;
        }
      );
  }
}
