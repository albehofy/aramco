import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchingDataService } from '../../Services/fetching-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {
      id:0,
      name:'',
      image:''
    }
  ]; 

  id:number| any; 
  department: string = 'المنتجات'


  constructor(private fpd: FetchingDataService, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    this.fpd.gettingProducts(this.id).subscribe(
      {
        next: (res)=>{
          this.products = res.result.products;
          this.department = res.result["company_agent"].name + " , "+res.result.name; 
        }
      }
    )
  }
}
