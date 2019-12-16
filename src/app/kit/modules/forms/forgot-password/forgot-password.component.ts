import { Component, OnInit } from '@angular/core';
import { FormElementModel } from 'src/app/models/FormElementModel';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formElements: Array<FormElementModel> = [
    {
      name: 'email',
      disabled: false,
      label: 'Ваша Email почта',
      placeholder: 'xxx@xxx.com',
      type: 'email'
    },
    {
      name: 'submit',
      disabled: false,
      type: 'submit',
      value: 'Submit'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
