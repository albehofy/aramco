import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  ngOnInit(): void {
    // Define svg paths and style properties
    const logo: NodeListOf<SVGPathElement> = document.querySelectorAll('#logo path');
    const styles: string[] = ['stroke', 'delay', 'array', 'offset'];
    let delay = 0;

    // Iterate through svg paths
    for (let i = 0; i < logo.length; i++) {
      // Define each path and its length
      const letter: SVGPathElement = logo[i];
      const totalLength: number = letter.getTotalLength();

      // Iterate through path style properties
      for (let o = 0; o < styles.length; o++) {
        // Define style property
        const s: string = styles[o];
        // Set each path style property
        letter.style.setProperty(
          s === 'stroke' ? 'stroke' : s === 'delay' ? '--delay' : `stroke-dash${s}`,
          s === 'stroke' ? '#59CE72' : s === 'delay' ? `${delay}s` : totalLength.toString(), 
        );
        letter.style.setProperty(
          s === 'stroke' ? 'stroke' : s === 'delay' ? '--delay' : `stroke-dash${s}`,
          s === 'stroke' ? '#59CE72' : s === 'delay' ? `${delay}s` : totalLength.toString(), 
        );
      }
      // Increment delay property
      delay += 0.3;
    }
    
    // Insert svg animation rule into stylesheet
    document.styleSheets[0].insertRule(`#logo { 
      animation: fill 0.5s ease forwards ${delay + 1.1}s
    }`);

    window.setTimeout(()=>{
      // Insert svg animation rule into stylesheet
      const styleSheet = this.renderer.createElement('style');
      this.renderer.setProperty(styleSheet, 'textContent', `
        #logo { 
          animation: fill 0.5s ease forwards ${delay + 1.1}s;
        }
        @keyframes fill {
          to {
            fill: #59CE72;
          }
        }
      `);
      this.renderer.appendChild(document.head, styleSheet);
    },500); 

    window.setTimeout(()=>{
      // Insert svg animation rule into stylesheet
      const styleSheet = this.renderer.createElement('style');
      this.renderer.setProperty(styleSheet, 'textContent', `
        #logo { 
          animation: fill 0.5s ease forwards ${delay + 1.1}s;
        }
        @keyframes fill {
          to {
            fill: #59CE72;
          }
        }
      `);
      this.renderer.appendChild(document.head, styleSheet);
      
    },0)

  }
  constructor(private renderer: Renderer2, private el: ElementRef) {

  }
}
