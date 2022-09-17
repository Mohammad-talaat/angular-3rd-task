import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'create',component:CreateUserComponent},
  {path:'edit',component:EditUserComponent},
  {path:'login',component:LoginUserComponent}
]

@NgModule({
  declarations: [
    EditUserComponent,
    CreateUserComponent,
    LoginUserComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
