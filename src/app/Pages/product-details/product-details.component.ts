import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from '../../Services/fetching-data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = {
    id: 0,
    name: '',
    image: '',
    components: [],
    how_to_use: '',
    description: '',
    phi: '',
  };
  products = [];
  depId: number | any;
  id: number | any;

  constructor(private fpd: FetchingDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadProductData(this.id);
    });
  }

  loadProductData(id: number): void {
    this.fpd.gettingProduct(id).subscribe({
      next: (res) => {
        this.product = res.result;
        this.depId = res.result.category.id;
        // this.loadRelatedProducts(this.depId);
      }
    });
  }

  loadRelatedProducts(depId: number): void {
    this.fpd.gettingProducts(depId).subscribe({
      next: (res) => {
        this.products = res.result.products;
        console.log(this.products)
      }
    });
  }
}
