import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitleCase]'
})
export class TitleCaseDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Access the inner text of the element
    const textContent = this.el.nativeElement.innerText;
    if (textContent) {
      // Convert the text to title case
      const titleCasedText = this.toTitleCase(textContent);
      // Update the text content of the element
      this.renderer.setProperty(this.el.nativeElement, 'innerText', titleCasedText);
    }
  }

  private toTitleCase(text: string): string {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
