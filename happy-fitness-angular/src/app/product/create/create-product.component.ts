import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  // imports: [CommonModule]
})

export class CreateProductComponent implements OnInit {
  focus: any;
  focus1: any;
  value = '';
  note: any;
  nameNull = false;
  priceNull = false;
  product_name: any;
  product_price: any;
  selectedType: string; // Biến lưu trữ loại sanpham được chọn
  productTypes: string[] = ["TypeA", "TypeB", "TypeC"];

  constructor(
    private router: Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.value = 'default';
    this.selectedType = this.productTypes[0];
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
