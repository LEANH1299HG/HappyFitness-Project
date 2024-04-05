import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/services/api.service';
import { AuthService } from 'src/app/services/services/auth.service';


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
  note: any;
  nameNull = false;
  priceNull = false;
  product_name: any;
  product_price: any;
  selectedCategory: 1; // Biến lưu trữ loại sanpham được chọn
  categories: null;
  roleNumber: null;
  status: any;
  quantity: null;
  facilities: null;
  selectedFacility: any;
  code: any;
  currentProductId: any;
  imgPath: any;s
  suppliers: any;
  selectedSupplier: any;
  description: any;
  statuses: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.selectedFacility = 1
    this.statuses = [{code: "COMING_SOON", text: "Chưa bán"}, {code: "OUT_OF_STOCK", text: "Hết hàng"}, {code: "STOP_SELL", text: "Ngưng bán"}, {code: "ACTIVE", text: "Hoạt động"}, {code: "DEACTIVATE", text: "Vô hiệu hóa"}]
    this.authService.getOwnInfo().subscribe({
      next: (res) => {
        if (res.body.role && (res.body.role.id !== 1 && res.body.role.id !== 2)) {
          // TODO: handle not allow notification
          this.router.navigate([`/home`])
          return
        }

        this.roleNumber = res.body.role.id
      }, // nextHandler
      error: (err) => {
        console.info(err)
        this.router.navigate([`/home`])
        return
      }, // errorHandler
    })
    this.apiService.getAllFacility().subscribe({
      next: (res) => {
        this.facilities = res.body
        this.selectedFacility = res.body[0].id
      }, // nextHandler
      error: (err) => {
        console.info(err)
        return
      }, // errorHandler
    })
    this.apiService.getAllCategory().subscribe({
      next: (res) => {
        this.categories = res.body
        this.selectedCategory = res.body[0].id
      }, // nextHandler
      error: (err) => {
        console.info(err)
        return
      }, // errorHandler
    })
    this.apiService.getAllSupplier().subscribe({
      next: (res) => {
        this.suppliers = res.body
      }, // nextHandler
      error: (err) => {
        return
      }, // errorHandler
    })
    this.code = this.route.snapshot.paramMap.get('code')

    this.getProductByCode()
  }

  onFacilityChange(value) {
    this.selectedFacility = value;
    this.getProductByCode()
  }

  getProductByCode () {
    this.apiService.getProductByCode(this.code, this.selectedFacility).subscribe({
      next: (res) => {
        this.product_name = res.body.name
        this.product_price = res.body.price
        this.status = res.body.status
        this.quantity = res.body.stockQuantity
        this.currentProductId = res.body.productId
        this.imgPath = res.body.imagePath
        this.selectedSupplier = res.body.supplierId
        this.description = res.body.description ? res.body.description : ''
        this.status = res.body.status
      }, // nextHandler
      error: (err) => {
        console.info(err)
      }, // errorHandler
    })
  }

  selectedOption(string: string) {
    this.value = string;
  }

  viewAll() {

  }

  reset() {
    this.getProductByCode()
  }

  save() {
    const nextProduct = {
      name: this.product_name,
      category: {
        id: this.selectedCategory
      },
      supplier: {
        id: this.selectedSupplier
      },
      description: this.description
    }
    const nextFacilityProduct = {
      stockQuantity: this.quantity,
      price: this.product_price,
      status: this.statuses.find(it => it.text == this.status).code,
    }
    if (this.roleNumber == 1) {
      this.apiService.updateProduct(nextProduct, this.currentProductId).subscribe({
        next: (res) => {
          console.info(res)
        }, // nextHandler
        error: (err) => {
          console.info(err)
          return
        }, // errorHandler
      })
    }
    this.apiService.updateFacilityProduct(nextFacilityProduct, this.currentProductId, this.selectedFacility).subscribe({
      next: (res) => {
        console.info(res)
      }, // nextHandler
      error: (err) => {
        console.info(err)
        return
      }, // errorHandler
    })
  }
}
