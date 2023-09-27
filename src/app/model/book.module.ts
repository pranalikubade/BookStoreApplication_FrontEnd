

export class Book {
  static book_id(book_id: any) {
    throw new Error('Method not implemented.');
  }
  bookId!:number;
  bookName!:string;
  authorName!:string;
  bookDescription!:string;
  bookImg!:string;
  price!:number;
  quantity!:number;
  static addedToBag: any;
}