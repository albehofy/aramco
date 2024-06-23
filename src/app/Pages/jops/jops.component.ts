import { Component } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';
@Component({
  selector: 'app-jops',
  templateUrl: './jops.component.html',
  styleUrl: './jops.component.css'
})
export class JopsComponent {
  jobsLength!: boolean;
  jobs: Array<any> = [];
  email:string = 'info@aramco-agri.com'; 
  phone: string = '+201012345678'
  constructor(private fpd: FetchingDataService) {
    this.fpd.gettingJobs().subscribe(
      {
        next: (res) => {
          this.jobsLength = res.result.length
          this.jobs = res.result;
          console.log(res.result)
          // String.replace()
        }
      }
    )
    this.fpd.gettingSettings().subscribe(
      {
        next: (res)=> {
          this.email = res.result.general_settings.email
          this.phone = res.result.general_settings.phone;
          console.log(this.email, this.phone)
        }
      }
    )
  }
}
