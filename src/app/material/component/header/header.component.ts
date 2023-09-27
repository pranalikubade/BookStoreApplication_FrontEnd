import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/model/book/book.model';
import { BookService } from 'src/app/book.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  


  public books:Book[]=[];

  constructor(private bookService:BookService,
    private cartService:CartService){}
  cartItems:number=5;
  
  search="";


  cartItemCount: number = 0;


  ngOnInit() {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }



}


