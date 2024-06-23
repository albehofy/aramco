import { Component, Input, OnInit } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'] // تعديل هنا ليكون styleUrls بدلاً من styleUrl
})
export class CarouselComponent implements OnInit {
  responsiveOptions: Array<any> = [];
  agentsAndCompanies: any[] = [];
  @Input() products: any[] = [];
@Input()inMain:Boolean = true; 
  constructor(private fpd: FetchingDataService) {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.fpd.gettingCompaniesAndAgents().subscribe({
      next: (res) => {
        this.agentsAndCompanies = res.result;
        console.log(Boolean(this.agentsAndCompanies[0]?.name));
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });

    this.fpd.gettingAllProducts().subscribe({
      next: (res) => {
        this.products = res.result;
        console.log(this.products);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
