import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.restful-api.dev/objects'

  constructor(private http: HttpClient){}

  getAllObjects(): Observable<Object[]>{
    return this.http.get<Object[]>(this.apiUrl)
  }

  addObject(object: any) : Observable<any> {
    return this.http.post<any>(this.apiUrl, object)
  }
}
