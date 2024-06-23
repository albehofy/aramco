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
  sendingMessage(message:any): Observable<any> {
    return this.http.post<any>(`${environment.basUrl}/api/${environment.version}/contacts`, message,httpOptions)
  }

  // Companies
  gettingCompaniesAndAgents(): Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/companies-agents`, httpOptions)
  }

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
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/companies-agents/${deparments}`, httpOptions)
  }

  // Products
  gettingProducts(deparment: number): Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/categories/${deparment}`, httpOptions)
  }

  //All Products
  gettingAllProducts(): Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/products`, httpOptions)
  }

  // Product
  gettingProduct(product:number):Observable<any> {
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/products/${product}`, httpOptions)
    }
    
    gettingJobs(){
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/jobs`, httpOptions)
  }
    gettingSettings(){
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/settings`, httpOptions)
  }
}
