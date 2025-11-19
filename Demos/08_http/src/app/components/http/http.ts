import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../utils/services/api-service';

@Component({
  selector: 'app-http',
  imports: [],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http implements OnInit {
  objectList : any[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllObjects().subscribe((data: any[]) => {
      this.objectList = data
    })
  }

  addObject() {
    this.apiService.addObject(  {
    "id": "9999999",
    "name": "test",
    "data": {
      "price": 689.99,
      "color": "Brown"
    }
  }).subscribe((data) => {
    console.log(data)
  })
  }

}
