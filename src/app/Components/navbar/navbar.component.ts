import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mouseIn:boolean = false;
goodbye() {
  this.mouseIn = false; 
}
  hello() {
    this.mouseIn = true; 
  }

}
