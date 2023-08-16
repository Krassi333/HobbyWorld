import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { IUser } from '../types/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient, private database: Database) {
    try {
      const lsUser = localStorage.getItem('user') || '';
      this.user = JSON.parse(lsUser);
    }
    catch {
      this.user = undefined;
    }
  }

  register(data: IUser) {
    const apiKey = environment.firebase.apiKey;
    console.log(apiKey);

    return this.http.post<IUser>(`https://hobbyworld-93522-default-rtdb.europe-west1.firebasedatabase.app/User.json`,
       data );

  }

  login(data: any) {
    const apiKey = environment.firebase.apiKey;
    const findUser = this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      { ...data, returnSecureToken: true });

    localStorage.setItem('user', JSON.stringify(findUser));
    return findUser;

  }

  getUsers(){
    return this.http.get<IUser>(`https://hobbyworld-93522-default-rtdb.europe-west1.firebasedatabase.app/User.json` ); 
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('user');
  }
}
