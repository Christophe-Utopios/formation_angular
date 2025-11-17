import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  series = ['Séries 1', 'Séries 2', 'Séries 3', 'Séries 4'];

  removeSerie(index: number) {
    this.series.splice(index, 1);
  }

  // Partie 2
  order: 'asc' | 'desc' = 'asc';
  setOrder(order: 'asc' | 'desc') {
    this.order = order;
  }
}
