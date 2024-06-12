import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

// adding HTTP Option For API Request Header
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Language': 'ar',
    // 'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class FetchingDataService {

  constructor(private http: HttpClient) { }
  // Companies
  gettingCompanies(): Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/companies`, httpOptions)
  }

  // Agent
  gettingAgents(): Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/agents`, httpOptions)
  }

  // Departments
  gettingDepartments(deparments: number): Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/deparments/${deparments}`, httpOptions)
  }

  // Products
  gettingProducts(deparment: number): Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/products/${deparment}`, httpOptions)
  }

  // Product
  gettingProduct(product:number):Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/departmaent/${product}`, httpOptions)
  }
}
