import { Component,EventEmitter,Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../cart/cart.service';
import  {Book} from '../types/Book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() book:Book = {} as Book;
  @Output() bookemitter = new EventEmitter<Book>();
  isInCart:boolean=false;

ngOnDestroy():void{

}
constructor(private cartService :CartService){}

  ngOnInit():void{
 
  }
  addTocart(){
    this.isInCart=true;
    this.cartService.add(this.book);
  //this.bookemitter.emit(this.book);
}


RemovefromCart(){
this.isInCart=false;
this.cartService.remove(this.book);

}
}