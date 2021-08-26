import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from 'src/app/models/product.interface';

@Injectable()
export class RouteTwoService {
  constructor(private http: HttpClient) {}

  public getPrducts(): Observable<any> {
    return this.http.get('../../../assets/product.json');
  }
}
