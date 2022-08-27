import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  exports:[
  ]
})
export class SharedModule { }
