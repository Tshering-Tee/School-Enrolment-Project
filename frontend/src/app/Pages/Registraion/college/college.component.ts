import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, withFetch } from '@angular/common/http';
// import { environment } from '../../../environment/environment';
import { Router, RouterLink} from '@angular/router';
 
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environment/environment';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-college',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule, RouterLink, NavBarComponent, FooterComponent],
  templateUrl: './college.component.html',
  styleUrl: './college.component.css'
})
export class CollegeComponent implements OnInit{

  form1!: FormGroup;
  formBuilder = inject(FormBuilder);
  httpClient = inject(HttpClient);
  router = inject(Router);

  ngOnInit(): void {
    this.form1 = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      highSchool: ['', [Validators.required]],
      graduateYear: ['', [Validators.required]],
      course: ['', [Validators.required]],
      college: ['', [Validators.required]],
    });
  }

  onSave1() {
    this.httpClient.post(`${environment.baseApiUrl}/college`, this.form1.value).subscribe({
      next: (data) => {
        alert('Registered Sucessfully')
        this.router.navigate(['get-college']);  
      },
      error: () => {
        alert('There was an error!');
      }
    });
  }

  selectedCollege: string = "Select a college";
  college: string[] = [
    "Sherabtse College",
    "Royal Thimphu College",
    "Gyelpozhing College",
    "Samtse College Of Education",
    "College Of Natural Resources",
    "College Of Science And Technology",
    "Paro College Of Education",
    "Taktse College of Language and Cultural Studies"
  ]
  
  year: number[] = [
    2021,
    2022,
    2023,
    2024
  ]

  course: string[] = [
    "Buddhist Studies",
    "Environmental Science/Studies",
    "Tourism and Hospitality Management",
    "Language Studies",
    "Education",
    "Business Administration",
    "Information Technology",
    "Health Science"
  ]
}
