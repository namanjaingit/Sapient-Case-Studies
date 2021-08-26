import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductList } from 'src/app/models/product.interface';
import { RouteTwoService } from './route-two.service';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.css'],
})
export class RouteTwoComponent implements OnInit {
  productsList: ProductList;
  @ViewChild('selectedPrice') selectedPrice: ElementRef;
  constructor(private routeTwoService: RouteTwoService) {}

  public priceList = [
    {
      value: '5-10',
      min: 500,
      max: 1000,
    },
    {
      value: '10-20',
      min: 1000,
      max: 2000,
    },
    {
      value: '20-40',
      min: 2000,
      max: 4000,
    },
    {
      value: '40-80',
      min: 4000,
      max: 8000,
    },
  ];

  public ngOnInit(): void {
    this.fetchProductList();
  }

  public changeToGridView(isGridView) {
    this.productsList.gridView = isGridView;
  }

  public filterByPrice() {
    let selectedPriceValue = this.selectedPrice.nativeElement.value;
    this.productsList.products = JSON.parse(sessionStorage.getItem('products'));
    if (selectedPriceValue == 'select-price') return;
    let maxSelectedRange = selectedPriceValue.split('-')[1] * 100;
    let minSelectedRange = selectedPriceValue.split('-')[0] * 100;

    this.filterProductList(maxSelectedRange, minSelectedRange);
  }

  private fetchProductList() {
    this.routeTwoService.getPrducts().subscribe((data) => {
      // keep the copy of data in session storage or in ngrx store
      sessionStorage.setItem('products', JSON.stringify(data.products));
      this.productsList = data;
    });
  }

  private filterProductList(max, min) {
    this.productsList.products = this.productsList.products.filter((item, index, arr) => {
      return item.price >= min && item.price <= max;
    });
  }
}
