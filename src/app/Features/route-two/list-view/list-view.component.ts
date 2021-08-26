import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/product.interface';

@Component({
  selector: 'product-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent {
  @Input() products: Products;
}
