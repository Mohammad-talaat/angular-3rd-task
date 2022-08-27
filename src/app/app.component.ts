import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import { UserModel } from './shared-module/models/user-model';
import { ControllerService } from './shared-module/services/controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges {
  title = 'angular-task-3';
  users!:any
  constructor(private userService:ControllerService){
    this.userService.getUsers().subscribe((data) => {
      // console.log(data)
      this.users = data
      this.dataSource = new MatTableDataSource<UserModel>(this.users)
    })
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
  dataSource!: MatTableDataSource<UserModel>;
  ngOnInit():void{

  }

  ngOnChanges(changes:SimpleChanges): void {
      console.log(changes['users'])
  }
}
