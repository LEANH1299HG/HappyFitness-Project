import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-ticket-admin',
  templateUrl: './list-ticket-admin.component.html',
  styleUrls: ['./list-ticket-admin.component.scss'],
  // imports: [CommonModule]
})

export class ListTicketAdComponent implements OnInit {
  focus: any;
  focus1: any;
  value = '';
  listProduct: any;

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    this.value = 'default';
    this.listProduct = [
      {
        productId: 1,
        imageUrl: 'url_to_your_image_1',
        name: 'Product 1',
        category: 'Category 1',
        price: 10.99,
        piece: 5,
        availableColor: 'Red'
      },
      {
        productId: 2,
        imageUrl: 'url_to_your_image_2',
        name: 'Product 2',
        category: 'Category 2',
        price: 15.99,
        piece: 3,
        availableColor: 'Blue'
      },
      // Add more products as needed
    ];
  }

  selectedOption(string: string) {
    this.value = string;
  }

  viewAll() {

  }

  delete(id: any) {

  }

  edit(id: any) {

  }

  add() {
    this.router.navigate(['/list-product']);
  }
}
