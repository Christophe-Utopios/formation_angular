import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule, ReactiveFormsModule],
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

  // Reactive forms :

  book_control = new FormControl("", [
    Validators.required,
    Validators.minLength(2),
    Validators.pattern(/^[A-Za-z]*/)
  ])

  saveBook() {
    if (this.book_control.valid){
      console.log(this.book_control.value)
      this.book_control.reset()
    }
  }

}
