import { Component } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  companies: Array<any> = [{
    name: '',
    country: '',
    image: ''
  }];
  constructor(private fds: FetchingDataService) {
    this.fds.gettingCompanies().subscribe(
      {
        next: res => {
          this.companies = res.result;
          console.log(res.result)
        }
      }
    );
  }
}
