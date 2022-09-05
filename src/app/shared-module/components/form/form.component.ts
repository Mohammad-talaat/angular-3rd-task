import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';

  interface Options {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  regiForm:any
  constructor(fb:FormBuilder) {
    this.regiForm = fb.group({
      'name' : [null, Validators.required],
      'email':[null, Validators.compose([Validators.required,Validators.email])],
      'phone' : [null, Validators.required],
      'address' : fb.group({
        'street':[null, Validators.required],
        'city':[null, Validators.required],
      }),
      'gender':[null, Validators.required],
    });
  }

  genderOptions: Options[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];
  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm)
  {
    console.log(form);
  }
}
