import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Fact {

  apiUrl = "https://api.chucknorris.io/jokes/random"

  constructor(private http: HttpClient){}

  getRandomFact(): Observable<string> {
    return this.http.get<{value: string}>(this.apiUrl).pipe(
      map(response => response.value),
      catchError(error => {
        alert(error.message)
        return of('')
      })
    )
  }
  
}
