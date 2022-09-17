import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  NgForm,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from '../../models/user-model';
import { ControllerService } from '../../services/controller.service';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() dialogReference: any;
  genderOptions: Options[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
  ];
  regiForm: any;
  user!: UserModel;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{duration: 1500});
  }

  constructor(fb: FormBuilder, private userService: ControllerService,private _snackBar: MatSnackBar) {
    this.regiForm = fb.group({
      name: [null, Validators.required],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone: [null, Validators.required],
      address: fb.group({
        street: [null, Validators.required],
        city: [null, Validators.required],
      }),
      gender: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.user = this.dialogReference.componentInstance.data[1];
    console.log(this.dialogReference.componentInstance.data[1]); //we get the data of the user edit clicked
    if (this.dialogReference.componentInstance.data[1]) {
      console.log(
        `true there is data from the form on init when edit button is clicked on ${this.user.id}`
      );
      this.loadFormData();
    }
  }

  onFormSubmit(form: UserModel) {
    if (!this.user) { //when creating user so the form is empty
      this.userService.createUser({
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: {
            street: form.address.street,
            city: form.address.city,
          },
          gender: form.gender,
      }).subscribe();

      this.openSnackBar('User has been created successfully','Close')

    } else if (this.user) { //when editing an existing user
      console.log(form,this.user.id);
      this.userService.editUser(form,this.user.id).subscribe();

      this.openSnackBar('User has been updated successfully','Close')

    }
    this.regiForm.reset();
    this.dialogReference.close();
  }

  loadFormData() {
    this.regiForm.setValue({
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone,
      gender: this.user.gender,
      address: {
        street: this.user.address.street,
        city: this.user.address.city,
      },
    });
  }
}
