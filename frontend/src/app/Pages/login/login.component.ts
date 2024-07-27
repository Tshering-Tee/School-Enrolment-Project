import { Component, OnInit, inject } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  formBuilder = inject(FormBuilder);
  httpClient = inject(HttpClient);
  router = inject(Router);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
      
    });
  }

  onSave() {
    this.httpClient.post(`${environment.baseApiUrl}/login`, this.form.value).subscribe({
      next: (data) => {
        alert('User has been Created Sucessfully')
        this.router.navigate(['displaymemeber']);  
      },
      error: () => {
        alert('There was an error!');
      }
    });
  }
}
