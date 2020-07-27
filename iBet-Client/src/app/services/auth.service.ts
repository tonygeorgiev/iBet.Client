import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../..//environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'api/identity/login';
  private registerPath = environment.apiUrl + 'api/identity/register';
  constructor(private http: HttpClient) {

   }

   login(data): Observable<any>{
    return this.http.post(this.loginPath, data)
   }

   logout(){
     localStorage.removeItem('token');
   }

   register(data): Observable<any>{
     return this.http.post(this.registerPath, data)
   }

   saveToken(token){
     localStorage.setItem('token', token);
   }

   getToken(){
     return localStorage.getItem('token');
   }

   isAuthenticated(){
     if(this.getToken()){
      return true
     }
     return false;
   }
}
