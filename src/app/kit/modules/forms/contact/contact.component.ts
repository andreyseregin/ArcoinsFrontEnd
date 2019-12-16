import { Component, OnInit } from '@angular/core';
import { FormElementModel } from 'src/app/models/FormElementModel';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formElements: Array<FormElementModel> = [
    {
      name: 'name',
      placeholder: 'Фамилия Имя Отчество',
      disabled: false,
      type: 'text'
    },
    {
      name: 'email',
      disabled: false,
      placeholder: 'Ваше Email почта',
      type: 'email'
    },
    {
      name: 'textarea',
      disabled: false,
      placeholder: 'Ваше сообщение',
      type: 'textarea'
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
