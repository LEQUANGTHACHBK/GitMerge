import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';

import { FuseConfigService} from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations : fuseAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor
  ( 
    private _fuseConfigService : FuseConfigService,
    private _formBuilder : FormBuilder,
    private _loginService : LoginService
  )         
  {
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    }
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^.{8,}$')]]
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this._loginService.Service_Login(this.loginForm.value)
    .then(result => console.log(result));
  }

} 
