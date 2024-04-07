import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/services/api.service'
import { AuthService } from 'src/app/services/services/auth.service';


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
  listProduct: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.getOwnInfo().subscribe({
      next: (res) => {
        if (res.body.role && (res.body.role.id !== 1 && res.body.role.id !== 2)) {
          // TODO: handle not allow notification
          this.router.navigate([`/products`])
          return
        }
      }, // nextHandler
      error: (err) => {
        console.info(err)
        this.router.navigate([`/home`])
        return
      }, // errorHandler
    })
    this.value = 'default';
    this.apiService.getProduct().subscribe({
      next: (res) => {
        this.listProduct = res.body
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

  delete(id: any) {
    this.apiService.deactiveProduct(id).subscribe({
      next: (res) => {
        this.listProduct = this.listProduct.map(it => {
          if (it.productId === id) {
            it.status = "Vô hiệu hóa"
          }

          return it
        })
      }, // nextHandler
      error: (err) => {
        console.info(err)
      }, // errorHandler
    })
  }

  active(id: any) {
    this.apiService.activeProduct(id).subscribe({
      next: (res) => {
        this.listProduct = this.listProduct.map(it => {
          if (it.productId === id) {
            it.status = "Hoạt động"
          }

          return it
        })
      }, // nextHandler
      error: (err) => {
        console.info(err)
      }, // errorHandler
    })
  }

  edit(code: any) {
    this.router.navigate([`/edit-product/${code}`])
  }

  add() {
    this.router.navigate(['/create-product']);
  }
}
