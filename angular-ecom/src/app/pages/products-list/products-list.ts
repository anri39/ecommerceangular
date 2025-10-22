import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4 items-stretch">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsList {
  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products'); // free api
    const data = await res.json();
    this.products.set(data);
  }

  products = signal<Product[]>([]);
}
