import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Post } from './types/post';


const {apiUrl}=environment;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {  }

  getPosts() {
  
    return this.http.get<Post[]>(`${apiUrl}/posts`);

  }
   
 
}
