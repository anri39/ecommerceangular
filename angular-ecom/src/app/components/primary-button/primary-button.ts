import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      (click)="btnClicked.emit()"
      class="bg-blue-500 text-white  border px-5 py-2 rounded-xl shadow-md hover:opacity-90  w-full"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButton {
  label = input('');
  btnClicked = output();
}
