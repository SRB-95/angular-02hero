import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {
  public preAuthLoginFormSubmitted: boolean = false;
  public preAuthLoginContainer: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(
    private readonly formBuilder: FormBuilder
  ) {}

  onclickHandler() {
    this.preAuthLoginFormSubmitted=true
  }
  onSubmitUserEmail(): void {

  }
}
