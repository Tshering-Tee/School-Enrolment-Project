import { Component } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  firstImg = 'assets/Images/background2.jpg'

  // constructor(private dialogRef: MatDialog){}

  openDialog(){
    this.dialog.open(LoginComponent, {
      panelClass: 'dialog-container',
    });
  }

  constructor(private router: Router, private dialog: MatDialog){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationStart) {
        this.closeDialog();
      }
      
    });
  }
 
  closeDialog(): void {
    this.dialog.closeAll();
  }
}

