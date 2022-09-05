
import { Component, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UserModel } from './shared-module/models/user-model';
import { ControllerService } from './shared-module/services/controller.service';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTest } from './shared-module/components/dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-task-3';
  error:any
  users!:any
  dataSource!: MatTableDataSource<UserModel>;

  constructor(private userService:ControllerService, public dialog: MatDialog){

  }

  displayedColumns: string[] = ['id', 'name', 'email', 'address','gender','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit():void{
      this.loadUsers()
    }

    openDialog(): void {
      let dialogRef = this.dialog.open(DialogTest, {
        width: '500px',
        data:['Create a new user']
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.loadUsers()
      });
    }

    editDialog(user:any){
      let dialogRef = this.dialog.open(DialogTest,{
          width:'500px',
          data:['Edit User',user]
        })
        dialogRef.afterOpened().subscribe(()=>{
          console.log('the edit dialog has been opened')
        })
    }

    loadUsers(){
      this.userService.getUsers().subscribe({
        next: res =>{
          this.users = res
          this.dataSource = new MatTableDataSource<UserModel>(this.users)
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

