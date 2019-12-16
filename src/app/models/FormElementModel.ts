import { FormControl } from '@angular/forms';

export interface FormElementModel {
  type: 'text' | 'number' | 'email' | 'password' | 'search' | 'checkbox' | 'radio' | 'textarea' | 'submit';
  name: string;
  value?: string | number | boolean;
  disabled: boolean;
  placeholder?: string;
  label?: string;
  formController?: FormControl;
}
