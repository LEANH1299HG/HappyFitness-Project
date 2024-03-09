import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây


@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.scss'],
  // imports: [CommonModule]
})

export class OrderCheckoutComponent implements OnInit {
  focus: any;
  focus1: any;
  value = '';

  constructor() { }

  ngOnInit() {
    this.value = 'default'
  }

  selectedOption(string: string) {
    this.value = string;
  }

  viewAll() {

  }
}
