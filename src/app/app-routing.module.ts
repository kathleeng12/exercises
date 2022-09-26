import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';

const routes: Routes = [
  {
    path: "",
    component: BlogListComponent

  },
  {
    path: "book",
    component: BookListComponent,
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)

  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
