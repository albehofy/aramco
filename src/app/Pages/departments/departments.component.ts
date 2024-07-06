import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchingDataService } from '../../Services/fetching-data.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
  depratments = [
    {
      id: '',
      name: '',
      image: ''
    }
  ];
  smallScreen: boolean = true;
  products: any = []
  selectedDepartment: any = [];

  id: number | any;
  company: string = 'اسم الشركة';

  constructor(private fpd: FetchingDataService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.fpd.gettingDepartments(this.id).subscribe(
      {
        next: (res) => {
          this.depratments = res.result.categories;
          this.company = res.result.name;
          this.getAllData(this.depratments)
        }
      }
    )
  }


  fectchDepartmentData() {
    // this.products = [];
    let products: any = [];
    for (let i = 0; i < this.selectedDepartment.length; i++) {
      let depart = this.depratments[this.selectedDepartment[i]];
      this.fpd.gettingProducts(Number(depart.id)).subscribe(
        {
          next: (res: any) => {
            this.products.push(res.result.products)
          }
        }
      )
    }
    // console.log(products)
    return products;
  }

  AddingDepartData() {
    if(this.selectedDepartment.length != 0){
      this.products = this.fectchDepartmentData();
    }else{
      this.getAllData(this.depratments)
    }
  }
  fire() {
    this.smallScreen = !this.smallScreen
    console.log(this.smallScreen)
  }

  getAllData(dep:any){
    this.products = [];
    for (let i = 0; i < dep.length; i++) {
      this.fpd.gettingProducts(Number(dep[i].id)).subscribe(
        {
          next: (res: any) => {
            this.products.push(res.result.products); 
          }
        }
      )
    }
  }
}
