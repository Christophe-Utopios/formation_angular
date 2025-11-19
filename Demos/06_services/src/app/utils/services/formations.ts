import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Formations {
  formations : string[] = []
  
  constructor() {
    const stored = localStorage.getItem("formations")
    if (stored) {
      this.formations = JSON.parse(stored)
    }
  }

  addFormation(formation : string) {
    this.formations.push(formation)
    localStorage.setItem("formations", JSON.stringify(this.formations))
  }
}
