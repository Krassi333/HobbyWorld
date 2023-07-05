import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IPost } from './types/post';


const {apiUrl}=environment;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {  }

  getAllPosts() {
    return this.http.get<IPost[]>(`${apiUrl}/posts`);
  }

  getPostById(id:string){
    return this.http.get<IPost>(`${apiUrl}/posts/details/${id}`);
  }
   
 
}
