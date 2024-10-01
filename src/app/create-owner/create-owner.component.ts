import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Για ngIf και άλλες οδηγίες

@Component({
  selector: 'app-create-owner',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule],
  templateUrl: './create-owner.component.html',
  styleUrl: './create-owner.component.css'
})
export class CreateOwnerComponent {
  propertyOwnerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.propertyOwnerForm = this.fb.group({
      vat: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // 10 digits
      firstName: ['', [Validators.required, Validators.minLength(2)]], // at least 2 chars
      lastName: ['', [Validators.required, Validators.minLength(2)]], // same
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // 10 digits
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])/)]], // at least 8 chars, at least1 number and special char
    });
  }

  onSubmit() {
    if (this.propertyOwnerForm.valid) {
      this.http.post('http://localhost:8080/webTechnikon-1.0-SNAPSHOT/resources/propertyOwners/create', this.propertyOwnerForm.value)
        .subscribe((response: any) => {
          console.log('Property owner created:', response);
        }, (error: any) => {
          console.error('Error creating property owner:', error);
        });
    }
  }
}
