import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightNumber]'
})
export class HighlightNumberDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const childNodes = Array.from(this.elementRef.nativeElement.childNodes);
    childNodes.forEach((childNode: any) => {
      if (childNode.nodeType === Node.TEXT_NODE) {
        const textNode = childNode as Text;
        const words = textNode.textContent?.split(' ');

        if (words) {
          const fragment = document.createDocumentFragment();

          words.forEach((word: string, index: number) => {
            const highlightedWord = this.isAllNumbers(word) ? this.createHighlightedElement(word) : this.createTextElement(word);
            if (index > 0) {
              fragment.appendChild(this.createTextElement(' '));
            }
            fragment.appendChild(highlightedWord);
          });

          this.renderer.insertBefore(this.elementRef.nativeElement, fragment, textNode);
          this.renderer.removeChild(this.elementRef.nativeElement, textNode);
        }
      }
    });
  }

  private isAllNumbers(word: string): boolean {
    return /^\d+$/.test(word.replace(/[^\w\s]/gi, ''));
  }

  private createHighlightedElement(text: string): HTMLElement {
    const span = this.renderer.createElement('span');
    this.renderer.setStyle(span, 'color', 'red');
    const textNode = this.renderer.createText(text);
    this.renderer.appendChild(span, textNode);
    return span;
  }

  private createTextElement(text: string): Text {
    return document.createTextNode(text);
  }
}