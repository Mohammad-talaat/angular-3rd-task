import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { UserModel } from '../../models/user-model';
import { ControllerService } from '../../services/controller.service';

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
  @Input() dialogReference:any
  regiForm:any
  constructor(fb:FormBuilder,private userService:ControllerService) {
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
  ngOnInit(): void {}

  onFormSubmit(form:UserModel){
    let user:UserModel = {
      name: form.name ,
      email:  form.email ,
      phone:  form.phone ,
      address:  {
        street:  form.address.street ,
        city:  form.address.city
      },
      gender: form.gender ,
    }
    this.userService.createUser(user).subscribe()
    this.regiForm.reset()
    this.dialogReference.close()

  }
}
