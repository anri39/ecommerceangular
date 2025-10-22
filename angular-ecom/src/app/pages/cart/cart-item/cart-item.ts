import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { Removebutton } from '../../../components/removebutton/removebutton';
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-cart-item',
  imports: [Removebutton],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span text-md font-bold>{{ item().title }}</span>
        <span text-sm>{{ '$' + item().price }}</span>
      </div>
      <app-removebutton
        label="Remove"
        class="ml-auto"
        (btnClicked)="cartService.removeFromCart(item().id)"
      />
    </div>
  `,
  styles: ``,
})
export class CartItem {
  item = input.required<Product>();
  cartService = inject(Cart);
}
