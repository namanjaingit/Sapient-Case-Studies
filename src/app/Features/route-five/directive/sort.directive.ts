import { Directive, EventEmitter, Input, Renderer2, ElementRef, HostListener, Output } from '@angular/core';
import { Sort } from 'src/app/utils/sort';

@Directive({
  selector: '[appSort]',
})
export class SortDirective {
  @Input() appSort: Array<any>;
  @Output() resetEmiter = new EventEmitter();
  constructor(private renderer: Renderer2, private targetElement: ElementRef) {}

  @HostListener('click')
  sortData() {
    const sort = new Sort();

    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute('data-order');

    const type = elem.getAttribute('data-type');

    const property = elem.getAttribute('data-name');
    if (order === 'asc') {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'desc');
    } else if (order === 'desc') {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'reset');
    } else {
      this.resetEmiter.emit(true);
      elem.setAttribute('data-order', 'asc');
    }
  }
}
