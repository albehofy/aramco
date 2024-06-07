import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  depratments = [
    {
      name: 'اسم الشركة 1',
      image: 'https://i.pinimg.com/564x/d4/eb/57/d4eb57c3adea209ae3516c09d15a60a2.jpg', 
      id: 1
    },
    {
      name: 'اسم الشركة 2',
      image: 'https://i.pinimg.com/564x/ba/6b/c3/ba6bc3e3ee5a4d0d81fdb7f55cdeb9b8.jpg', 
      id: 2
    },
    {
      name: 'اسم الشركة 3',
      image: 'https://i.pinimg.com/564x/9a/f0/2d/9af02d7a9e1bdd4d2cd55f6e3ac33732.jpg', 
      id: 3
    },
    {
      name: 'اسم الشركة 4',
      image: 'https://i.pinimg.com/564x/91/e3/b0/91e3b0ebd89493b8e991a90215b5d25b.jpg', 
      id: 4
    },
    {
      name: 'اسم الشركة 5',
      image: '/assets/images/bg.jpg', 
      id: 5
    },
    {
      name: 'اسم الشركة 6',
      image: '/assets/images/bg.jpg', 
      id: 6
    },
    {
      name: 'اسم الشركة 7',
      image: '/assets/images/bg.jpg', 
      id: 7
    }
  ]; 
}
