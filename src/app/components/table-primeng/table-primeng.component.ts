import { Component, OnInit } from '@angular/core';
//model
import { Posts } from '../../models/posts';
//services
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-table-primeng',
  templateUrl: './table-primeng.component.html',
  styleUrls: ['./table-primeng.component.css']
})
export class TablePrimengComponent implements OnInit {

  post: Posts;
  columns: any[];
  
  constructor(

    private postsService: PostsService

  ) { }

  ngOnInit(): void {
    this.getPosts();
    this.columns = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Body' },
    ];
  }

  getPosts() {
    this.postsService.getPosts().subscribe((posts: Posts) => {
      this.post = posts;
    },
      error => {
        console.log(error);
      }

    )
  }
 

}
