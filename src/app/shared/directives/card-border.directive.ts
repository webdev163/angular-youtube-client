import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardBorder]',
})
export class CardBorderDirective implements OnInit {
  @Input('appCardBorder') publishedAt = '';

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) {}

  public ngOnInit(): void {
    const div = this.renderer2.createElement('div');
    div.classList.add('line');
    const color = this.getColor(this.publishedAt);
    div.classList.add(color);
    this.renderer2.appendChild(this.elementRef.nativeElement, div);
  }

  public getColor(date: string) {
    const sixMonthBeforeNow = new Date();
    const oneMonthBeforeNow = new Date();
    const sevenDaysBeforeNow = new Date();
    sixMonthBeforeNow.setMonth(sixMonthBeforeNow.getMonth() - 6);
    oneMonthBeforeNow.setMonth(oneMonthBeforeNow.getMonth() - 1);
    sevenDaysBeforeNow.setDate(sevenDaysBeforeNow.getDate() - 7);

    const publishedDate = new Date(date);

    if (publishedDate < sixMonthBeforeNow) {
      return 'red';
    } else if (publishedDate >= sixMonthBeforeNow && publishedDate < oneMonthBeforeNow) {
      return 'yellow';
    } else if (publishedDate >= oneMonthBeforeNow && publishedDate < sevenDaysBeforeNow) {
      return 'green';
    } else {
      return 'blue';
    }
  }
}
