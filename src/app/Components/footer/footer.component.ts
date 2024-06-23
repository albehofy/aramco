import { Component } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links = {
   "facebook":"", 
   "youtube":"", 
   "linkedin":"",
   "x":""
  }

  general = {
    phone: "", 
    address: '', 
    email:''
  }

  agents: Array<any> = [];

  constructor(private fpd: FetchingDataService) {
    this.fpd.gettingSettings().subscribe(
      {
        next: (res) => {
          this.links = res["result"].links;
          this.general = res["result"].general_settings;
          console.log(this.links)
          console.log(res.result)

        }
      }
    )

    this.fpd.gettingAgents().subscribe(
      {
        next:(res)=>{
          this.agents = res.result;
      }
    }
    )
  }
}
