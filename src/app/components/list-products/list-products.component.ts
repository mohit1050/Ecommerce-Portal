import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

interface Product {
  userID?: string;
  name: string;
  description: string;
  rating: string;
  price: string;
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  constructor(private service: ApiService) {}

  products: any = [];

  ngOnInit(): void {
    // console.log('my array: ' + this.products);

    this.service.getProducts().subscribe((res) => {
      // console.log(res);
      this.products = res;

      console.log('products: ' + this.products);
    });
    // console.log('product list: ' + this.products);
  }
}
