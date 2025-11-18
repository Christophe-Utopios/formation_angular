import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  imports: [],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  message : string = "test"

  updateMessage(e : Event) {
    const input = e.target as HTMLInputElement
    this.message = input.value
  }
}
