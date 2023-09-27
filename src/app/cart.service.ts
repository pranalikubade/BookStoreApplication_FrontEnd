import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  incrementItemCount() {
    this.cartItemCountSubject.next(this.cartItemCountSubject.value + 1);
  }

  decrementItemCount() {
    this.cartItemCountSubject.next(this.cartItemCountSubject.value - 1);
  }
  // constructor() { }
}
