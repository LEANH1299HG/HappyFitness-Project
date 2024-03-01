import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  // imports: [CommonModule]
})

export class ListProductComponent implements OnInit {
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
