import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
  // imports: [CommonModule]
})

export class OrderHistoryComponent implements OnInit {
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
