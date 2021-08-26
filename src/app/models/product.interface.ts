export interface ProductList {
  gridView: boolean;
  products: Products[];
}

export interface Products {
  thumbNail: string;
  price: number;
  title: string;
}
