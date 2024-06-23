import { Component } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  links: any = {};
  constructor(private fpd: FetchingDataService) {
    this.fpd.gettingSettings().subscribe(
      {
        next: (res) => {
          this.links = res["result"].links;
        }
      }
    )

  }
}
