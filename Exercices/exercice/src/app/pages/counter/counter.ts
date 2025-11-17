import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = 0

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }

  get color() {
    return this.counter % 2 ? "red" : "green"
  }
}
