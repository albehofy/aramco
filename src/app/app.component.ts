import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aramco-agriculture';
  constructor(private renderer: Renderer2, private el: ElementRef)  {  
    window.setTimeout(()=>{
      // Insert svg animation rule into stylesheet
      const styleSheet = this.renderer.createElement('style');
      this.renderer.setProperty(styleSheet, 'textContent', `
        .loader { 
         height:0!important;
        }
      `);
      this.renderer.appendChild(document.head, styleSheet);
      console.log("0")
    },3700)
  }
}
