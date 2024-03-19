import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'],
  // imports: [CommonModule]
})

export class CreateTicketComponent implements OnInit {
  focus: any;
  focus1: any;
  value = '';
  note: any;
  nameNull = false;
  priceNull = false;
  quantityNull = false;
  ticket_name: any;
  ticket_price: any;
  ticket_quantity: any;
  selectedType: string; // Biến lưu trữ loại sanpham được chọn
  timeTypes: string[] = ["1 Year", "2 Years", "3 Years"];

  constructor(
    private router: Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.value = 'default';
    this.selectedType = this.timeTypes[0];
  }

  selectedOption(string: string) {
    this.value = string;
  }

  viewAll() {

  }

  cancel() {

  }

  save() {
    this.toastr.success('Tạo vé thành công!');
    this.router.navigate(['/ticket-list']);
  }
}
