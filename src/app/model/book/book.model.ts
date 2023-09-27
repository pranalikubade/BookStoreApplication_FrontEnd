export class Book {
  static added: any;
  static Id(Id: any) {
    throw new Error('Method not implemented.');
  }
    Id!:number;
  bookName!:string;
  bookAuthor!:string;
  bookDescription!:string;
  bookLogo!:string;
  bookPrice!:number;
  bookQuantity!:number;
   added: any;
}
