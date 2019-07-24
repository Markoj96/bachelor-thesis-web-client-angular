import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../../shared/services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  private name = '';
  private password = '';
  private gender = 'male';
  private age;
  private country = 'serbia';
  private city = 'los_santos';
  private errorMessage = '';

  constructor(private authenticationService: AuthenticationService, private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  public createRegisterForm() {
    this.registerForm = new FormGroup({
      'name': new FormControl(this.name, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required]),
      'gender': new FormControl(this.gender, [Validators.required]),
      'age': new FormControl(this.age, [Validators.required]),
      'country': new FormControl(this.country, [Validators.required]),
      'city': new FormControl(this.city, [Validators.required])
    });
  }

  public onSubmit() {
    this.authenticationService.registerUser(this.registerForm.value)
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
