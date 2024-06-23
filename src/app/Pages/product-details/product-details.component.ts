import { Component } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product = {
    id: 0,
    name: '',
    image: '',
    components: [],
    how_to_use: '',
    description: '', 
    phi:'',
  };
  products = []
  depId:Number | undefined;
  id: number | any;
  constructor(private fpd: FetchingDataService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.fpd.gettingProduct(this.id).subscribe(
      {
        next: (res) => {
          this.product = res.result;
        }
      }
    )
    // this.depId = res.result.category.id;
    // this.fpd.gettingProducts(Number(this.depId)).subscribe(
    //   {
    //     next: (res)=>{
    //       this.products = res.result.products;
    //     }
    //   }
    // )
    
  }
}
