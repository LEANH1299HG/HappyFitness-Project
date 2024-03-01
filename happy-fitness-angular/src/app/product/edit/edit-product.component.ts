import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  // imports: [CommonModule]
})

export class EditProductComponent implements OnInit {
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
