import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../model/cat';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatserviceService {
  constructor(private http:HttpClient) { }
  

  log(data: any, file: File): Observable<any>{
    const formData: FormData = new FormData();
      formData.append('cat', data);
      formData.append('file', file);
    
    return this.http.post('http://localhost:8080/saveCat', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  find(): Observable<Cat[]> {
    console.log('Find All Cats');
    return this.http.get<Cat[]>(`http://localhost:8080/cat`);
  }

}