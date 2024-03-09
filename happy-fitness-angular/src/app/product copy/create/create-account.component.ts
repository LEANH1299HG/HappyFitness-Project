import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  // imports: [CommonModule]
})

export class CreateAccountComponent implements OnInit {
  focus: any;
  focus1: any;
  value = '';
  note: any;
  nameNull = false;
  priceNull = false;
  product_name: any;
  product_price: any;
  selectedType: string; // Biến lưu trữ loại sanpham được chọn
  genderTypes: string[] = ["Male", "Female"];

  constructor(
    private router: Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {

    this.value = '';
    this.selectedType = this.genderTypes[0];
    this.product_name = '';
    this.product_price = '';
    this.note = ''
  }

  selectedOption(string: string) {
    this.value = string;
  }

  viewAll() {

  }

  cancel() {

  }

  save() {
    this.toastr.success('Tạo sản phẩm thành công!');
    this.router.navigate(['/list-product']);
  }
}
