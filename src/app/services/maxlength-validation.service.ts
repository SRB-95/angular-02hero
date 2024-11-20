// Core Modules
import { Injectable } from '@angular/core';

//Angular Modules
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaxlengthValidationService {

  validateMaxlength(control: AbstractControl, length: number): ValidationErrors | null {
    return (control.value && this.maxlength(control.value, length)) ? { maxLengthExceeded: true } : null;
  }

  private maxlength(value: string, maxlength: number): boolean {
    return value.length > maxlength;
  }
}
