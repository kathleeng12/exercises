import { Injectable, OnInit} from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  book: Book[] = [
    {
      id: 1,
      name:"Kath",
      author:["Kass Morgan", "Danielle Paige"],
      isbn:"1-9800-3463-X"
    },
    {
      id: 2,
      name:"Kathleen",
      author:["Cynthia Hand", "Brodi Ashton", "Jodi Meadows"],
      isbn:"0-06-308790-1"
    },
    {
      id: 3,
      name:"Dane",
      author:["Sona Charaipotra", "Dhonielle Clayton"],
      isbn:"0-06-234240-1"
    },
    {
      id: 4,
      name:"Danesse",
      author:["Ibi Zoboi", "Yusef Salaam"],
      isbn:"0-06-299648-7"
    },
    {
      id: 5,
      name:"Kathleen Danesse",
      author:["Becky Albertalli", "YAdam Silvera"],
      isbn:"1-6696-0743-7"
    }
  ]

  constructor() { }

  getBookDisplay(){
    return this.book;
  }

  editList(index: number) {
    this.book = this.book;
    this.deleteList(index);
  }

  deleteList(index: number) {

  }
}
