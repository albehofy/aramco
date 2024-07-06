import { Injectable } from '@angular/core';
import { FetchingDataService } from './fetching-data.service';

@Injectable({
  providedIn: 'root'
})
export class CarouselDataService {
  products:any; 
  constructor(private fpd:FetchingDataService) { }
  fetchcarouselData(depId:any){
    this.fpd.gettingProducts(depId).subscribe({
      next: (res) => {
        this.products = res.result.products;
        
      }
    });
  }
}
