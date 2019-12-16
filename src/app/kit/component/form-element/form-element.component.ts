import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent implements OnInit {

  @Input() type: 'text' | 'number' | 'email' | 'search' | 'password' | 'checkbox' | 'radio' | 'textarea' | 'submit';
  @Input() name: string;
  @Input() value?: string | number | boolean;
  @Input() disabled: boolean;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() formController?: FormControl;

  elementFormController: FormControl;

  @Output() triggerSubmit: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.formController) {
      this.elementFormController = new FormControl(this.value ? this.value : null);
    } else {
      this.elementFormController = this.formController;
    }
  }

}
