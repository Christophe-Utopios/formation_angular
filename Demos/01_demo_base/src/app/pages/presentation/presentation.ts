import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css'
})
export class Presentation {
  name = "Toto"
  m2i = "https://campusnumerique.auvergnerhonealpes.fr/app/uploads/2021/10/logo_m2iformation.jpg"
  description = "image m2i"
  isLogged = false
  myStyle = {
    backgroundColor: 'aqua'
  }

  maClassA = "bleu"
  maClassB = "red"

  toggleLogged() {
    this.isLogged = !this.isLogged
  }
}
