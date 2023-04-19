import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

constructor(private http: HttpClient) { }

apiURL = environment.apiURLiBanking;

logError(logError): Observable<any> {

  let headers = new HttpHeaders();
  headers= headers.set("tokenFixed", "errorT0k#nfR0n7");
  return this.http.post<any>(this.apiURL + 'error/errorHandling', logError,  { headers });
}

}
