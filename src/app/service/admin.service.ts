import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serviceConstant = {
    'loginurl': environment.apiUrl + '/gitapplication/users/login',
    'registerurl': environment.apiUrl + '/gitapplication/users/register',
    'signouturl': environment.apiUrl + '/gitapplication/users/logout',
    'forgeturl': environment.apiUrl + '/gitapplication/users/forgot-password',
  }

  constructor(private http: HttpClient) { }


  login(login: any) {
    return this.http.post(this.serviceConstant.loginurl, login);
  }
  register(register: any) {
    return this.http.post(this.serviceConstant.registerurl, register);
  }
  logout(signout: any) {
    return this.http.post(this.serviceConstant.signouturl, signout);
  }
  forgetpassword(forgetpassword: any) {
    // let url=this.serviceConstant.forgeturl;
    // this.httpService.postHttp(url + forgetpassword)
    return this.http.post(this.serviceConstant.forgeturl, forgetpassword);
  }
}