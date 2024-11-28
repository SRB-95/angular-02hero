import { Component } from '@angular/core';

// Models
import { LoginData } from '../models/form.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  // Object to hold the form data
  loginData: LoginData = {
    email: '',
    password: ''
  };

  // Method to handle form submission
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.loginData); // Correctly logs the form data
    } else {
      console.error('Form is invalid');
    }
  }
}
