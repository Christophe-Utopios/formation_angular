import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css',
})
export class Enfant {

  @Input() message: string = ''

  @Input() var2?: string

}
