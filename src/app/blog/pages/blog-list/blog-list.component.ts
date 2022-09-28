import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {


  blog?:Blog[] = [];

  constructor(private blogService:BlogService) { }
  // constructor(private blogService:BlogService,
  //   private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.blog = this.blogService.getBlogDisplay();
  }


  // navigate(){
  //   this.router.navigate(['/blog']),{relativeTo:this.route}
  // }
}
