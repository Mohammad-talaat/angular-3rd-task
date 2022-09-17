import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  users!:UserModel[]
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<UserModel[]>('http://localhost:3000/users')
  }

  createUser(user:UserModel){
    return this.http.post<UserModel>('http://localhost:3000/users',user)
  }

  editUser(user:UserModel,id:number | undefined){
    return this.http.put<UserModel>(`http://localhost:3000/users/${id}`,user)
  }

  deleteUser(id:number | undefined){
    return this.http.delete<UserModel>(`http://localhost:3000/users/${id}`)
  }


}

