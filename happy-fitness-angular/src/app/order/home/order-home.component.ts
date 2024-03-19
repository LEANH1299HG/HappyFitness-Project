import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule ở đây


@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.scss'],
  // imports: [CommonModule]
})

export class OrderHomeComponent implements OnInit {
  focus: any;
  focus1: any;
  value = '';
  listCourses: any[];
  newsItems: any;
  productLists: any;
  averageRating = 4;
  ratingNumber = 15;
  selectedType: string; // Biến lưu trữ loại sanpham được chọn
  Types: string[] = ["TypeA", "TypeB"];

  constructor() { }

  ngOnInit() {
    this.selectedType = this.Types[0];
    this.value = 'default';
    this.productLists = [
      {
        title: 'CLOTHES',
        quantity: '5 items',
        image: 'assets/img/media bg-cover (1).png'
      },
      {
        title: 'CLOTHES',
        quantity: '5 items',
        image: 'assets/img/media bg-cover (2).png'
      },
      {
        title: 'CLOTHES',
        quantity: '5 items',
        image: 'assets/img/media bg-cover.png'
      },
      {
        title: 'CLOTHES',
        quantity: '5 items',
        image: 'assets/img/media bg-cover (1).png'
      },
      {
        title: 'CLOTHES',
        quantity: '5 items',
        image: 'assets/img/media bg-cover (2).png'
      },
    ]
    this.newsItems = [
      // Đây là mảng các phần tử tin tức của bạn, có thể là đối tượng hoặc chuỗi
      // Bạn có thể thay đổi các giá trị của các phần tử tùy thuộc vào dữ liệu thực tế
      {
        title: 'Jason Price',
        desc: 'Admin',
        source: 'janick_parisian@yahoo.com',
        image: 'assets/img/image (1).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Jukkoe Sisao',
        desc: 'CEO',
        source: 'sibyl_kozey@gmail.com',
        image: 'assets/img/image (2).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Harriet King',
        desc: 'CTO',
        source: 'nadia_block@hotmail.com',
        image: 'assets/img/image (1).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Lemora Benson',
        desc: 'Lead',
        source: 'feil.wallace@kunde.us',
        image: 'assets/img/image (2).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Olivia Reese',
        desc: 'Strategist',
        source: 'kemmer.hattie@cremin.us',
        image: 'assets/img/image (1).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Bertha Valdez',
        desc: 'CEO',
        source: 'loraine.koelpin@tromp.io',
        image: 'assets/img/image (2).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Harriett Payne',
        desc: 'Digital Marketer',
        source: 'nannie_west@estrella.tv',
        image: 'assets/img/image (1).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'George Bryant',
        desc: 'Social Media',
        source: 'delmer.kling@gmail.com',
        image: 'assets/img/image (2).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Lily French',
        desc: 'Strategist',
        source: 'lucienne.herman@hotmail',
        image: 'assets/img/image (1).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Howard Adkins',
        desc: 'CEO',
        source: 'wiegand.leonor@herman',
        image: 'assets/img/image (2).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Earl Bowman',
        desc: 'Digital Marketer',
        source: 'waino_altenwerth@nicolette',
        image: 'assets/img/image (1).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      {
        title: 'Patrick Padilla',
        desc: 'Social Media',
        source: 'octavia.nienow@gleichner',
        image: 'assets/img/image (2).png',
        lessons: 12,
        students: 50,
        price: 120,
        averageRating: 4,
        ratingNumber: 15,
        discount: 95
      },
      // Thêm các mục tin tức khác tương tự ở đây
    ];
    this.listCourses = this.chunkArray(this.newsItems, 3);
    console.log(22222, this.chunkArray(this.newsItems, 3));


  }

  // Phân chia mảng thành các nhóm 4 phần tử
  chunkArray(array, chunkSize) {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  }

  selectedOption(string: string) {
    this.value = string;
  }

  viewAll() {

  }

  generateStarRating(rating: number): string {
    const stars: string[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('<i class="fas fa-star"></i>');
    }

    if (hasHalfStar) {
      stars.push('<i class="fas fa-star-half-alt"></i>');
    }

    return stars.join('');
  }

  filter() {

  }
}
