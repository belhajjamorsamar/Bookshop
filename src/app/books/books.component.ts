import { Component, OnInit  } from '@angular/core';
import  {Book} from '../types/Book'
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit  {
   Books: Book[] =[];
constructor(private booksService:BooksService){}
 

   
isDisabled:boolean =false;
handleClick(){
  this.isDisabled =true;
};

isShowing:boolean=false;

ngOnInit(): void {
  this.Books=this.booksService.getBooks();
}


}
