import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
  // imports: [CommonModule]
})

export class TicketDetailComponent implements OnInit {
  focus: any;
  focus1: any;
  value = '';
  ticketList: { image: string; title: string; price: string; location: string; }[];
  priceRange: number = 0; // Giá trị ban đầu của priceRange
  listProduct: { productId: number; imageUrl: string; name: string; category: string; price: number; piece: number; availableColor: string; }[];

  constructor() { }

  ngOnInit() {
    this.value = 'default';
    // this.value = 'default';
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
    this.ticketList = [
      {
        image: "assets/img/image 5.png",
        title: "California Fitness & Yoga",
        price: "$25.99 / tháng",
        location: "222 phố Trung Kính, Cầu Giấy, Hà Nội."
      },
      {
        image: "assets/img/image 6.png",
        title: "Elite Fitness",
        price: "$25.99 / tháng",
        location: "235 Trần Hưng Đạo, Hai Bà Trưng, HN"
      },
      {
        image: "assets/img/image 7.png",
        title: "Golden Wellness Fitness & Spa",
        price: "$30 / tháng",
        location: "58 Nguyễn Trãi, Thanh Xuân, HN"
      },
      {
        image: "assets/img/image 5.png",
        title: "California Fitness & Yoga",
        price: "$25.99 / tháng",
        location: "222 phố Trung Kính, Cầu Giấy, Hà Nội."
      },
      {
        image: "assets/img/image 6.png",
        title: "Elite Fitness",
        price: "$25.99 / tháng",
        location: "235 Trần Hưng Đạo, Hai Bà Trưng, HN"
      },
      {
        image: "assets/img/image 7.png",
        title: "Golden Wellness Fitness & Spa",
        price: "$30 / tháng",
        location: "58 Nguyễn Trãi, Thanh Xuân, HN"
      },
      // Thêm các đối tượng khác vào mảng tương tự nếu cần
    ];
  }

  selectedOption(string: string) {
    this.value = string;
  }

  viewAll() {

  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }


  // Phương thức lọc dựa trên khoảng giá
  filterByPrice() {
    // Thực hiện logic lọc dựa trên this.priceRange
    // Ví dụ:
    // Nếu this.priceRange = 5000000, bạn có thể lọc các phần tử có giá từ 0 đến 5,000,000đ
    // Nếu this.priceRange = 10000000, bạn có thể lọc tất cả các phần tử với giá từ 0 đến 10,000,000đ
  }
}
