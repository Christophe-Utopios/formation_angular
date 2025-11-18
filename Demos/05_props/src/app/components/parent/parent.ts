import { Component } from '@angular/core';
import { Enfant } from '../enfant/enfant';

@Component({
  selector: 'app-parent',
  imports: [Enfant],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentMessage : string = "Hello depuis le composant parent!"
}
