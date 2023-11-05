import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatserviceService {
  constructor(private http:HttpClient) { }
  

  log(data: any, file: File): Observable<any>{
    const formData: FormData = new FormData();
      formData.append('body', data)
      formData.append('file', file)
    
    
    return this.http.post('http://localhost:8080/log', formData, {responseType: 'json'})
  }


  // private baseUrl = 'http://localhost:8080';

  // constructor(private http: HttpClient) { }

  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }

}
