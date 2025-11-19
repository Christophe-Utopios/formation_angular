import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css',
})
export class Enfant {

  @Input() message: string = ''

  @Input() var2?: string

  @Output() dataEmitted = new EventEmitter<string>()

  sendData(){
    this.dataEmitted.emit("Hello depuis le composant enfant !")
  }

}
