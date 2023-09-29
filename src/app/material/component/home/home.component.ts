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
  numberOfBooks = 0;

  public books:Book[]=[];
  order: string[] = [
   "low-high","high-low","newest Arrivals"
  ];

  selectedSortOption: string;
  
  
  
  // Function to perform the sorting based on the selected option
  sortBooks() {
    switch (this.selectedSortOption) {
      case "low-high":
        this.books.sort((a, b) => a.bookPrice - b.bookPrice);
        break;
      case "high-low":
        this.books.sort((a, b) => b.bookPrice - a.bookPrice);
        break;
      case "newest Arrivals":
        // Assuming you have a 'dateAdded' property in your Book class, replace it with your actual property
        this.books.sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime());
        break;
      default:
        break;
    }
  }
  

  ngOnInit(): void {
    
    this.bookService.getBooks().subscribe((response:any) =>{
     console.log("book " + response);
     this.books=response.data;
     console.log("read"+this.books);
    this.numberOfBooks = this.books.length;

   })}

  search:string="";
  cartItems :any;
  constructor(private bookService:BookService,
    private cartservice:CartService,  
    ){
      this.selectedSortOption = this.order[0];
      
    }

    
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