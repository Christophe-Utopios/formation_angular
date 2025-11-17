import { Component } from '@angular/core';

@Component({
  selector: 'app-blocks',
  imports: [],
  templateUrl: './blocks.html',
  styleUrl: './blocks.css',
})
export class Blocks {
  isLogged = false
  fruits = ["Pomme", "Poire", "Abricot"]

  toggleLogged() {
    this.isLogged = !this.isLogged
  }

}
