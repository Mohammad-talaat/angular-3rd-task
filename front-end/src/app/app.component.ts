
import { Component, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UserModel } from './shared-module/models/user-model';
import { ControllerService } from './shared-module/services/controller.service';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTest } from './shared-module/components/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  constructor(private userService:ControllerService, public dialog: MatDialog,private _snackBar: MatSnackBar){

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{duration: 1500});
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'address','phone','gender','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit():void{
      this.loadUsers()
    }

    openDialog(): void {
      let dialogRef = this.dialog.open(DialogTest, {
        width: '500px',
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
        dialogRef.afterClosed().subscribe(()=>{
          console.log('Edit dialog has been closed')
          this.loadUsers()
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

    deleteUser(id:number|undefined){
      this.userService.deleteUser(id).subscribe({
        next:res=>{
          console.log("this is the delete button pressed",res)
          this.loadUsers()
          this.openSnackBar('User has been deleted successfully','Close')
        },
        error:err=>{
          console.log('failed to delete the user' + err)
        }
      })
    }


}

