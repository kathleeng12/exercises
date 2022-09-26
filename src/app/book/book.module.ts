import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
