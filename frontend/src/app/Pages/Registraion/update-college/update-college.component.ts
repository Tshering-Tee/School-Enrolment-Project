import { HttpClientModule, HttpParamsOptions } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-update-college',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './update-college.component.html',
  styleUrl: './update-college.component.css'   
})
export class UpdateCollegeComponent implements OnInit {

  id: string = '';
  form1!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form1 = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      highSchool: ['', [Validators.required]],
      graduateYear: ['', [Validators.required]],
      course: ['', [Validators.required]],
      college: ['', [Validators.required]]
    });

  this.fetchCollege();
}

  fetchCollege() {
    this.httpClient.get(`${environment.baseApiUrl}/college/${this.id}`).subscribe({
      next: (data) => {
        this.form1.patchValue(data);
      },
      error: (err) => {
        console.error('There was an error on fetching!', err);
      }
    });

  }
  onUpdate() {
    this.httpClient.put(`${environment.baseApiUrl}/college/${this.id}`, this.form1.value).subscribe({
      next: (data) => {
        alert('Student has been Updated Sucessfully')
        this.router.navigate(['get-college']);
      },
      error: (err) => {
        console.error('There was an error!', err);
      }
    });
  }

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