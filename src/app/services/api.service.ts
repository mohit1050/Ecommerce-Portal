import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url =
    'https://angular-ecommerce-6d93a-default-rtdb.asia-southeast1.firebasedatabase.app/products.json';

  url2 =
    'https://angular-ecommerce-6d93a-default-rtdb.asia-southeast1.firebasedatabase.app/products/';

  url3 =
    'https://angular-ecommerce-6d93a-default-rtdb.asia-southeast1.firebasedatabase.app/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.url);
  }

  postProduct(name: any, description: any, rating: any, price: any) {
    return this.http.post(
      this.url,
      JSON.stringify({
        name: name,
        description: description,
        rating: rating,
        price: price,
      })
    );
  }

  // postProduct(data: any) {
  //   return this.http.post(this.url, JSON.stringify(data));
  // }

  deteleProducts(key: any) {
    var v1 = this.url2 + key + '.json';
    return this.http.delete(v1, key);
  }

  updatetodo(key: any, value: any) {
    var v2 = this.url2 + key + '.json';
    return this.http.put(v2, JSON.stringify(value));
  }
}
