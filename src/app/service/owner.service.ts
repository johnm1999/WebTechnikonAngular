import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private apiUrl = 'http://localhost:8080/webTechnikon-1.0-SNAPSHOT/resources/propertyOwners';

  constructor(private http: HttpClient) { }

  // Μέθοδος για να φέρει όλους τους ιδιοκτήτες
  getAllOwners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getall`);
  }
  
}
