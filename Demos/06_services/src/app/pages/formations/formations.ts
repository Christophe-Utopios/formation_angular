import { Component, OnInit } from '@angular/core';
import { Lifecycle } from '../lifecycle/lifecycle';
import { Formations } from '../../utils/services/formations';

@Component({
  selector: 'app-formations',
  imports: [Lifecycle],
  templateUrl: './formations.html',
  styleUrl: './formations.css',
})
export class FormationsComponent implements OnInit {
  formations : string[] = []

  constructor(private formationService: Formations){}

  ngOnInit(): void {
    this.formations = this.formationService.formations
    this.formationService.addFormation("Formation 1")
    this.formationService.addFormation("Formation 2")
  }

}
