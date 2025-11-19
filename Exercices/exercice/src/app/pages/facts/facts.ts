import { Component, OnInit, signal } from '@angular/core';
import { Fact } from '../../utils/services/fact';

@Component({
  selector: 'app-facts',
  imports: [],
  templateUrl: './facts.html',
  styleUrl: './facts.css',
})
export class Facts implements OnInit {
  fact = signal("")

  constructor(private factService: Fact){}

  ngOnInit(): void {
    this.getFact()
  }

  getFact(){
    this.factService.getRandomFact().subscribe((data) => {
      this.fact.set(data)
    })
  }

}
