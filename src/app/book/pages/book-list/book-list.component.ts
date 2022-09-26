import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  book?:Book[] = [];

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.book = this.bookService.getBookDisplay();
  }

}
