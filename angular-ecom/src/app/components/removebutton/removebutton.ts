import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-removebutton',
  imports: [],
  template: `
    <button
      (click)="btnClicked.emit()"
      class="bg-red-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:bg-red-600 transition"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class Removebutton {
  label = input('');
  btnClicked = output();
}
