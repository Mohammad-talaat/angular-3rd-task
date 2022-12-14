import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIModule } from './material-ui-module/material-ui.module';
import { UserModule } from './user-module/user.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared-module/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './shared-module/components/form/form.component';

const routes:Routes = [
  {path:'user',loadChildren:()=> import('./user-module/user.module').then(m =>m.UserModule)}
]

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    UserModule,
    SharedModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
