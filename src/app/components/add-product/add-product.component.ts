import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  // private service!: ApiService;
  constructor(private service: ApiService) {}

  ngOnInit(): void {}

  get name() {
    return this.addProductForm.get('name');
  }

  get description() {
    return this.addProductForm.get('description');
  }
  get rating() {
    return this.addProductForm.get('rating');
  }
  get price() {
    return this.addProductForm.get('price');
  }

  submit() {
    console.log('submit dab gaya re ');

    const { name, description, rating, price } = this.addProductForm.value;
    var data: any = '{ $name, $description, $rating, $price }';

    if (
      !this.addProductForm.valid ||
      !name ||
      !description ||
      !rating ||
      !price
    ) {
      return;
    }

    this.service
      .postProduct(name, description, rating, price)
      .subscribe((res) => {
        console.log('data added');
      });

    // this.service.postProduct(data).subscribe((res) => {
    //   console.log('data added');
    // });

    console.log('submit dab gaya re ');
    console.log(name, description, rating, price);
  }
}
