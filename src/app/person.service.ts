import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://192.168.163.137:8080/api/persons';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
