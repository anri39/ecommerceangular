import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';
import { CartItem } from './cart-item/cart-item';
import { OrderSummary } from './order-summary/order-summary';

@Component({
  selector: 'app-cart',
  imports: [CartItem, OrderSummary],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl ">Shopping cart</h2>
      @for (products of cartService.cart(); track products.id) {
      <app-cart-item [item]="products" />
      }
      <app-order-summary />
    </div>
  `,
  styles: ``,
})
export class CartPage {
  cartService = inject(Cart);
}
