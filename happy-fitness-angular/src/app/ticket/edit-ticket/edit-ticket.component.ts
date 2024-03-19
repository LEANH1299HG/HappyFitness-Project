import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây


@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss'],
  // imports: [CommonModule]
})

export class EditTicketComponent implements OnInit {
  focus: any;
  focus1: any;
  value = '';
  note: any;
  nameNull = false;
  priceNull = false;
  product_name: any;
  product_price: any;
  selectedType: string; // Biến lưu trữ loại sanpham được chọn
  productTypes: string[] = ["Clothes", "Service", "Other"];

  constructor() { }

  ngOnInit() {
    this.value = 'default';
    this.selectedType = this.productTypes[0];
    this.product_name = 'Gym Suit 1';
    this.product_price = '$1200';
    this.note = 'This product is very good'
  }

  selectedOption(string: string) {
    this.value = string;
  }

  viewAll() {

  }

  cancel() {

  }

  save() {

  }
}
