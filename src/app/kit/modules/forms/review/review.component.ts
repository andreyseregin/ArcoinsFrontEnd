import { Component, OnInit } from '@angular/core';
import { FormElementModel } from 'src/app/models/FormElementModel';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  formElements: Array<FormElementModel> = [
    {
      name: 'email',
      disabled: false,
      label: 'Ваша Email почта',
      placeholder: 'xxx@xxx.com',
      type: 'email'
    },
    {
      name: 'textarea',
      disabled: false,
      label: 'Ваш отзыв',
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
