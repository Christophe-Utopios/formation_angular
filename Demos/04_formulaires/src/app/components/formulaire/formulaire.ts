import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  message : string = "test"
  message2 : string = ""

  user = {
    name: '',
    email: '',
    password: ''
  }

  isSubmitted = false

  updateMessage(e : Event) {
    const input = e.target as HTMLInputElement
    this.message = input.value
  }

  get passwordHasError(){
    return this.isSubmitted && this.user.password.length < 6
  }

  submitUser(){
    this.isSubmitted = true
    if (!this.passwordHasError){
      console.log(this.user)
    }
  }
}
