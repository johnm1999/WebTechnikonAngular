import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Εισαγωγή του FormsModule


@Component({
  selector: 'app-uptade-owner',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule,FormsModule],
  templateUrl: './uptade-owner.component.html',
  styleUrl: './uptade-owner.component.css'
})
export class UptadeOwnerComponent {
  propertyOwnerForm: FormGroup;
  ownerId: number | null = null; // Owner ID
  ownerDataLoaded: boolean = false; // check for data load

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
   
    this.propertyOwnerForm = this.fb.group({
      vat: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])/)]],
    });
  }

  onIdSubmit() {
    if (this.ownerId) {
      this.loadOwnerData(this.ownerId); // get data by id -> Na dw an leitourgei prwta
    } else {
      alert('Please enter a valid ID.');
    }
  }

  loadOwnerData(id: number) {
    this.http.get<any>(`http://localhost:8080/webTechnikon-1.0-SNAPSHOT/resources/propertyOwners/getbyid/${id}`).subscribe(data => {
      this.propertyOwnerForm.patchValue(data); // fill form 
      this.ownerDataLoaded = true; // true -> show form
    }, error => {
      console.error('Error fetching owner data:', error);
      alert('Owner not found!');
    });
  }

  onSubmit() {
    if (this.propertyOwnerForm.valid) {
      this.http.put(`http://localhost:8080/webTechnikon-1.0-SNAPSHOT/resources/propertyOwners/updateby/${this.ownerId}`, this.propertyOwnerForm.value).subscribe(response => {
        console.log('Property owner updated:', response);
      }, error => {
        console.error('Error updating property owner:', error);
      });
    }
  }
  //user can delete a owner by pressing button safe delete
  safeDelete() {
    this.http.put(`http://localhost:8080/webTechnikon-1.0-SNAPSHOT/resources/propertyOwners/safedeleteby/${this.ownerId}`, null) // Χρησιμοποιούμε PUT χωρίς body
      .subscribe(response => {
        console.log(response);
        this.ownerDataLoaded = false; // Καθαρίζουμε τη φόρμα
        this.propertyOwnerForm.reset(); // Καθαρίζουμε τα πεδία
      }, error => {
        console.error('Error deleting property owner:', error);
      });
  }
}
