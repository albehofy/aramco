import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  responsiveOptions: any[] | undefined;
  products: any = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'اسم المنتج الاول',
      description: 'Product Description',
      image: 'https://i.pinimg.com/564x/fe/95/1a/fe951aa5c9da0d1f7f60de21d571708c.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'اسم المنتج الثاني',
      description: 'Product Description',
      image: 'https://i.pinimg.com/736x/09/d0/2d/09d02da3a055091ca33506f05478afa3.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'اسم المنتج الثالث',
      description: 'Product Description',
      image: 'https://i.pinimg.com/564x/18/14/15/181415e7780af3071aa8464f0c3091b7.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'اسم المنتج الرابع',
      description: 'Product Description',
      image: 'https://i.pinimg.com/564x/14/88/1a/14881af178862a7586c696fe926c2d8b.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
  ];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
