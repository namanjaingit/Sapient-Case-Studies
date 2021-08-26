import { Component, Input, Output, EventEmitter, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @Input() priceList;
  @Output() changeView = new EventEmitter();
  @Output() priceFilter = new EventEmitter();
  @ViewChildren('selectedPrice')
  public changeToGridView(isGrid) {
    this.changeView.emit(isGrid);
  }

  public filterByPrice() {
    this.priceFilter.emit();
  }
}
