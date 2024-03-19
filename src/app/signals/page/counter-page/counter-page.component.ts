import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() ** 2); //! SOLO LECTURA. Cuando cambia la señal counter el computed() vuelve a computar y se actualiza en todos los lugares donde se está utilizando

  increaseBy(value: number) {
    this.counter.update((prev) => prev + value);
  }
}
