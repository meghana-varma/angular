import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  constructor() { }
   
  ngOnInit() {
  }
  cartlog: object[] = [
    {
      'product': 'Arrow Shirt',
      'price': 100
    },
    {
      'product': 'Levis jeans',
      'price': 150
    },
    {
      'product': 'nike Shoes',
      'price': 200
    },
    {
      'product': 'Blue saree',
      'price': 250
    },
  ];
  cart: object[] = [];
  total:number=0;
  list(event: any) {
    this.cart.push(event);
    this.total+=event.price;
  }
  remove(event: number,item) {
    this.cart.splice(event, 1);
    this.total-=item.price;

  }



}
