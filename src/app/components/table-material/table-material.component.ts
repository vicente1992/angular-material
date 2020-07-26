import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-table-material',
  templateUrl: './table-material.component.html',
  styleUrls: ['./table-material.component.css']
})
export class TableMaterialComponent implements OnInit {
  post: Posts[];
  columns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<Posts>(this.post);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getPost();
  }
  getPost() {
    this.postsService.getPosts().subscribe((posts) => {
      this.dataSource.data = posts as Posts[];
    },
      error => {
        console.log(error);
      }
    )
  }

}

