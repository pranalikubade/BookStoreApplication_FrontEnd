import { Component } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/model/book.module';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  books:Book[]=[];

  public cartItems:number=1;
  numberOfBooks:number=20;
Items: any;
  
 increase(){
  if(this.cartItems<this.numberOfBooks){
  this.cartItems++;
  }
 }

 decrease(){
  if(this.cartItems>1){
  this.cartItems--;
  }
 }

  constructor(private bookService:BookService){}

  ngOnInit(): void {
      this.bookService.getBooks().subscribe(response =>{
        this.books=response;
        console.log(this.books);
        // this.numberOfBooks=this.books.length;
      })
  }

  added:boolean=true;
  onClick(){
    if (this.added){
    this.added=false;
    }else
    this.added=true;
  }

  customerDetails=true;
  customer(){
    if(this.customerDetails){
      this.customerDetails=!this.customerDetails;
    }
  }
  order=true;
  orderSummary(){
    if(this.order){
      this.order=!this.order;
    }
  }
}