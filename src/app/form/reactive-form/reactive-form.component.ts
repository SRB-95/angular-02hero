import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log('Form Submitted:', this.reactiveForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // get name() { return this.reactiveForm.get('name'); }
  // get email() { return this.reactiveForm.get('email'); }
  // get phone() { return this.reactiveForm.get('phone'); }

  // Reusable method to get form control
  getFormControl(controlName: string) {
    return this.reactiveForm.get(controlName);
  }

}
