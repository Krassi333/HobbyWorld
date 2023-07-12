import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { IUser } from '../types/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient, private database: Database) { }

  register(data: IUser) {
    const apiKey =environment.firebase.apiKey ;
console.log(apiKey);

    return this.http.post<IUser>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,  {data,returnSecureToken:true});

  }

  login(data:any) {
    const apiKey =environment.firebase.apiKey ;
console.log(data);

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {...data,returnSecureToken:true});

  }
}
