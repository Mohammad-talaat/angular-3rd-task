import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http:HttpClient) { }
  users!:UserModel

  getUsers(){
    return this.http.get<UserModel>('http://localhost:3000/users')
  }

}
