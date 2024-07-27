import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environment/environment';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { FooterComponent } from '../../footer/footer.component';




@Component({
  selector: 'app-display-member',
  standalone: true,
  imports: [HttpClientModule, NavBarComponent, FooterComponent],
  templateUrl: './get-college.component.html',
  styleUrl: './get-college.component.css'
})
export class GetCollegeComponent {

  httpClient = inject(HttpClient);
  router = inject(Router);

  collegelist: {
    id: string;
    college: string;
    firstName: string;
    lastName: string; 
    contactNumber: string; 
    gender: string; 
    highSchool: string; 
    graduateYear: string; 
    course: string; 
  }[] = [];


  ngOnInit(): void {
    this.fetchCollege();
  }

  fetchCollege() {
    this.httpClient.get(`${environment.baseApiUrl}/college`).subscribe({
      next: (data) => {
        this.collegelist = data as {
          id: string;
          college: string;
          firstName: string;
          lastName: string; 
          contactNumber: string; 
          gender: string; 
          highSchool: string; 
          graduateYear: string; 
          course: string; 
        }[];
      },
      error: () => {
        alert('There was an error!');
      }
    });
  }

  onDelete(id: string) {
    if (confirm("Do you want to Delete?")) {
      this.httpClient.delete(`${environment.baseApiUrl}/college/${id}`).subscribe({
        next: (data) => {
          alert('Student has been Deleted Sucessfully');
          this.fetchCollege();
        },
        error: () => {
          alert('There was an error!');
        }
      });
    } else {
    }
  }

  onEdit(id: string) {
    this.router.navigate(['college/update/'+id]);
  }

}