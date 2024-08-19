import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Order } from './order';

@Component({
  selector: 'sales-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  title = 'Order Component'
  hide = false;
  counter = new Date().toLocaleString();

  myOrder: Order = {
    id: 1,
    name: 'Order 1',
    description: 'Order 1 Description',
    price: 100,
    quantity: 1,
    total: 100
    
  }

  toggle() {
    this.hide = !this.hide;
  }

}
