import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
appURl = environment.apiURLiBanking

constructor(private http: HttpClient) { }

generateCaptcha(SessionId) {
  let headers = new HttpHeaders();
  headers = headers.set('Session', SessionId)

  return this.http.get<any>( this.appURl +'generateCaptcha', { headers: headers, responseType: 'blob' as 'json'  });
}


Session() : Observable<any>{

  return this.http.post<any>( this.appURl +'session',{})
}

ValidateSessionAndCaptcha(SessionId, Captcha) : Observable<any>{
  let headers = new HttpHeaders();
  headers = headers.set('Session' , SessionId)
                    .set('Captcha' , Captcha);

  return this.http.get<any>(this.appURl + 'checkSessionCaptcha' ,{headers: headers});
}
}
