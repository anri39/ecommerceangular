import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from '../../../components/primary-button/primary-button';
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div class="bg-white shadow-md border rounded-xl relative h-[320px]">
      <span
        class="absolute top-2 right-3 text-xl font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
      >
        @if (product().stock) {
        {{ product().stock + ' left' }}
        } @else { Out of Stock }
      </span>

      <div class="flex flex-col items-center justify-between h-full p-6">
        <img [src]="product().image" class="w-[200px] h-[100px] object-contain" />
        <div class="text-center">
          <span class="block text-md font-bold text-wrap break-words leading-tight">
            {{ product().title }}
          </span>
          <span class="block text-md font-bold">{{ '$' + product().price }}</span>
        </div>
        <app-primary-button
          label="Add to Cart"
          class="w-[300px] mt-3"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
  cartService = inject(Cart);
}
