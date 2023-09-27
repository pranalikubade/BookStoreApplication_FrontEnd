import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { CartService } from 'src/app/cart.service';
import { Book } from 'src/app/model/book/book.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  numberOfBooks=0;

  public books:Book[]=[];
  order: string[] = [
   "low-high","high-low","newest Arrivals"
  ];

  ngOnInit(): void {
    
    this.bookService.getBooks().subscribe((response:any) =>{
     console.log("book " + response);
     this.books=response.data;
     console.log("read"+this.books);
     this.numberOfBooks = this.books.length;

   })}

  search:string="";
  constructor(private bookService:BookService,
    private cartItems:CartService
    ){}

    
  // ngOnInit(): void {
  //   if(this.search==""){
  //     this.bookService.getBooks().subscribe(response =>{
  //       this.books=response.object;
  //       console.log(this.books);
  //       // this.numberOfBooks=this.books.length;
  //     })}
  //     else{
  //       this.bookService.getBookByName(this.search).subscribe(response => {
  //         this.books=response.object;
  //         console.log(this.books);
  //         this.ngOnInit();
  //       })
  //     }
  // }


  onClick(book:Book){
    if (!book.added){
    this.bookService.getBookById(book.Id).subscribe(response => {
      console.log("Clicked")
      book.added=true;
      this.cartItems.incrementItemCount();
    });
    }else{
    book.added=false;
    this.cartItems.decrementItemCount();
    }
    
    }

  }