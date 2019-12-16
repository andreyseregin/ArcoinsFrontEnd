import { Component, OnInit } from '@angular/core';
import { FormElementModel } from 'src/app/models/FormElementModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formElements: Array<FormElementModel> = [
    {
      name: 'email',
      disabled: false,
      label: 'Ваша Email почта',
      placeholder: 'xxx@xxx.com',
      type: 'email'
    },
    {
      name: 'password',
      disabled: false,
      label: 'Ваш пароль',
      placeholder: 'xxxxxxx',
      type: 'password'
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
