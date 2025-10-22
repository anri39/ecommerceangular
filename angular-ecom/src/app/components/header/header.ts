import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">{{ title() }}</span>
      <app-primary-button [label]="'Cart (' + cartService.cart().length + ')'"></app-primary-button>
    </div>
  `,
  styles: [],
})
export class Header {
  title = signal('Angular E-Commerce');
  cartService = inject(Cart);
}
