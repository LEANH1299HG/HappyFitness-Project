import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  // imports: [CommonModule]
})

export class OrderDetailComponent implements OnInit {
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
