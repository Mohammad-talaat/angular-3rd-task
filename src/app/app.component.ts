
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UserModel } from './shared-module/models/user-model';
import { ControllerService } from './shared-module/services/controller.service';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-task-3';
  error:any
  dataSource!: MatTableDataSource<UserModel>;

  constructor(private userService:ControllerService){}

  displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit():void{
      this.loadUsers()
    }





  loadUsers(){
    this.userService.getUsers().subscribe({
      next: res =>{
        this.dataSource = new MatTableDataSource<UserModel>(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort= this.sort;
        },
        error: err => {
          this.error = err.message;
          console.error('There was an error!', err);
        }
      })
    }


}
