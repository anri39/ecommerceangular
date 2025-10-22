import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';
import { CartItem } from './cart-item/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl ">Shopping cart</h2>
      @for (products of cartService.cart(); track products.id) {
      <app-cart-item [item]="item" />
      }
    </div>
  `,
  styles: ``,
})
export class CartPage {
  cartService = inject(Cart);
}
