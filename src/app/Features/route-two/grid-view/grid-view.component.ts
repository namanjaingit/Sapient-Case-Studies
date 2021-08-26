import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/product.interface';

@Component({
  selector: 'product-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css'],
})
export class GridViewComponent {
  @Input() products: Products;
}
