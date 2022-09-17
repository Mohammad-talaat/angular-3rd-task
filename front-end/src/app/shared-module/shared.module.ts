import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialUIModule } from '../material-ui-module/material-ui.module';
import { DialogTest } from './components/dialog/dialog.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    DialogTest,
    FormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialUIModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    // FormComponent
  ]
})
export class SharedModule { }
