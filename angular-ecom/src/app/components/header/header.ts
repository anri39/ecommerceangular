import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: ` <div class="w-10 bg-red-500">{{ title() }}</div> `,
  styles: [],
})
export class Header {
  title = signal('Angular E-Commerce');
}
