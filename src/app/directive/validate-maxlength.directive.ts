// Core Modules
import { Directive, Input, forwardRef } from '@angular/core';

//Angular Modules
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

// Services
import { MaxlengthValidationService } from '../services/maxlength-validation.service';

@Directive({
  selector: '[appValidateMaxlength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidateMaxlengthDirective),
      multi: true,
    },
  ],
})
export class ValidateMaxlengthDirective {
  @Input() maxLength!: number;

  constructor(private readonly maxlengthValidationService: MaxlengthValidationService) { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.maxlengthValidationService.validateMaxlength(control, this.maxLength);
  }
}
