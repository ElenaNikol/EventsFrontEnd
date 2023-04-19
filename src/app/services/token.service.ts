import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  apiURL = environment.apiURLiBanking
  activeApp : boolean = true

  constructor(private http: HttpClient,
    private router: Router,
    private toastService: ToastService) { }

  checkTokenExp() {
    return this.http.get<any>(this.apiURL + 'isTokenExpired')
  }

  RedirectToLogin() {
    this.activeApp = false
    this.router.navigate(["/login"]);
    localStorage.clear();
    localStorage.clear();

    this.addToast("error", "", "sesionExp")
  }

  addToast(type, title, message) {
    this.toastService.showMessage(type, title, message);
  }

  isLoggedIn(){
    return this.activeApp;
  }

  setLoggedIn(isLoggedIn){
    this.activeApp = isLoggedIn
  }

}
