import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signal } from './components/signal/signal';
import { Http } from './components/http/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signal, Http],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('08_http');
}
