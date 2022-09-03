import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  genderOptions: Options[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];
  ngOnInit(): void {
  }

}
