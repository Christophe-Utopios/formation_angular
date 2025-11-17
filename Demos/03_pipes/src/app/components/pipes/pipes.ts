import { DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UppertablePipe } from '../../utils/uppertable-pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, UppertablePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  message = "Hello World"
  pi = Math.PI
  today = new Date()
  tab = ["toto", "tata", "titi"]
}
