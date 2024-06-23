import { Component } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';
@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css'
})
export class AgentsComponent {
  agents: Array<any> = [{
    name: '',
    country: '',
    image: ''
  }];
  constructor(private fds: FetchingDataService) {
    this.fds.gettingAgents().subscribe(
      {
        next: res => {
          this.agents = res.result;
          console.log(res.result)
        }
      }
    );
  }
}
