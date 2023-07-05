import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IPost } from 'src/app/types/post';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post!: IPost;

  constructor(private activatedRout: ActivatedRoute, private apiService: ApiService) {

  }

  ngOnInit(): void {
    const postId = this.activatedRout.snapshot.params['postId'];
    this.apiService.getPostById(postId).subscribe(post => {
      this.post = post;
    })
console.log(this.post);

  }


}
