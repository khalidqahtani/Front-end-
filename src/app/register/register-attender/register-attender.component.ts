import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../users/users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register-attender',
  templateUrl: './register-attender.component.html',
  styleUrls: ['./register-attender.component.scss']
})
export class RegisterAttenderComponent implements OnInit {
  myReactiveForm: FormGroup;
  hide = true;
  error = '';


  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.myReactiveForm = this.formBuilder.group({
      id: ['', Validators.compose([Validators.required,
        Validators.pattern(/[^\s]+/),
        Validators.pattern(/[1-2]{1}[0-9]{9}/),
        Validators.maxLength(10),
        Validators.minLength(10)])],
      firstname: ['', Validators.compose([Validators.required,
        Validators.pattern(/[a-zA-Z\s]{2,10}/),
        Validators.maxLength(10),
        Validators.minLength(2)])],
      lastname: ['', Validators.compose([Validators.required,
        Validators.pattern(/[a-zA-Z\s]{2,16}/),
        Validators.maxLength(16),
        Validators.minLength(2)])],
      pic: [''],
      username: ['', Validators.compose([Validators.required,
        Validators.pattern(/[^\s]+/),
        Validators.pattern(/[a-zA-Z0-9]{4,11}/),
        Validators.maxLength(11),
        Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[^\s]+/)])],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.compose([Validators.required,
        Validators.pattern(/[^\s]+/),
        Validators.maxLength(37),
        Validators.email])],
      mobile: ['', Validators.compose([Validators.required,
        Validators.pattern(/[^\s]+/),
        Validators.pattern(/[5]{1}[0-9]{8}/),
        Validators.maxLength(9),
        Validators.minLength(9)])],
    });
  }
  onSubmit() {
    this.userService.addUser(this.myReactiveForm).subscribe(
      data => {
        // this.router.navigate(['/users"']);
      },
      error => this.error = error,
      () => this.router.navigate(['/login'])
    );
  }

}
