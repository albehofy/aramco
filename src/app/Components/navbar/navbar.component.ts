import { Component } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavToggled:boolean = false;
  mouseIn:boolean = false;

  general:any = {
    phone: '', 
    working_hours: ''
  }

  links:any = {
    "facebook":"", 
    "youtube":"", 
    "linkedin":"",
    "x":""
   }
  constructor(private fpd: FetchingDataService) {
    this.fpd.gettingSettings().subscribe(
      {
        next: (res) => {
          this.general = res["result"].general_settings;
          this.links = res["result"].links;

        }
      }
    )

  }
  
goodbye() {
  this.mouseIn = false; 
}
  hello() {
    this.mouseIn = true; 
  }

}
