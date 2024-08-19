import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderComponent } from './order/order.component'; 

@Component({
  selector: 'sales-root',
  standalone: true,
  imports: [RouterOutlet,OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'salesapp';
}
