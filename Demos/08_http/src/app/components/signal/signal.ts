import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  // Créer un état réactif
  count = signal(0)

  // Computed : Valeur calculée automatiquement (readonly), pas possible de faire double.set()
  double = computed(() => this.count() * 2)

  // effect : Réagir aux changements
  constructor() {
    effect(() => {
      console.log("Count : ", this.count())
    })
  }

  incrementer(){
    this.count.update(v => v + 1) // Basé sur l'ancienne valeur
  }

  decrementer(){
    this.count.set(this.count() - 1) // Remplacer la valeur
  }

}
