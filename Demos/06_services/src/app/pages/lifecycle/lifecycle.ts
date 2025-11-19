import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnInit, OnDestroy, OnChanges {
  @Input() data?: string


  constructor(){
    console.log("Constructor")
  }


  ngOnInit(): void {
    console.log("On init")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Change', changes)
    const previous = changes['data'].previousValue
    console.log(previous)
    const newValue = changes['data'].currentValue
    console.log(newValue)
    const isFirstChange = changes['data'].isFirstChange()
    console.log(isFirstChange)
  }


  ngOnDestroy(): void {
    console.log("On destroy")
  }
}
