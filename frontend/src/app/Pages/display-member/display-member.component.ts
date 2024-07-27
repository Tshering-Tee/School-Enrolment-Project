import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environment/environment';


@Component({
  selector: 'app-display-member',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './display-member.component.html',
  styleUrl: './display-member.component.css'
})
export class DisplayMemberComponent {

  httpClient = inject(HttpClient);
  router = inject(Router);

  memberlist: {
    id: string;
    Name: string;
    email: string;
    password: string; 
  }[] = [];


  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.httpClient.get(`${environment.baseApiUrl}/login`).subscribe({
      next: (data) => {
        this.memberlist = data as {
          id: string;
          Name: string;
          email: string;
          password: string; 
        }[];
      },
      error: () => {
        alert('There was an error!');
      }
    });
  }

  // navToCreate() {
  //   this.router.navigate(['customers/create']);
  // }

}
