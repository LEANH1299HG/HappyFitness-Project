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

  constructor() { }

  ngOnInit() {
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
        time: 'Admin',
        source: 'janick_parisian@yahoo.com',
        image: 'assets/img/image (1).png'
      },
      {
        title: 'Jukkoe Sisao',
        time: 'CEO',
        source: 'sibyl_kozey@gmail.com',
        image: 'assets/img/image (2).png'
      },
      {
        title: 'Harriet King',
        time: 'CTO',
        source: 'nadia_block@hotmail.com',
        image: 'assets/img/image (1).png'
      },
      {
        title: 'Lemora Benson',
        time: 'Lead',
        source: 'feil.wallace@kunde.us',
        image: 'assets/img/image (2).png'
      },
      {
        title: 'Olivia Reese',
        time: 'Strategist',
        source: 'kemmer.hattie@cremin.us',
        image: 'assets/img/image (1).png'
      },
      {
        title: 'Bertha Valdez',
        time: 'CEO',
        source: 'loraine.koelpin@tromp.io',
        image: 'assets/img/image (2).png'
      },
      {
        title: 'Harriett Payne',
        time: 'Digital Marketer',
        source: 'nannie_west@estrella.tv',
        image: 'assets/img/image (1).png'
      },
      {
        title: 'George Bryant',
        time: 'Social Media',
        source: 'delmer.kling@gmail.com',
        image: 'assets/img/image (2).png'
      },
      {
        title: 'Lily French',
        time: 'Strategist',
        source: 'lucienne.herman@hotmail',
        image: 'assets/img/image (1).png'
      },
      {
        title: 'Howard Adkins',
        time: 'CEO',
        source: 'wiegand.leonor@herman',
        image: 'assets/img/image (2).png'
      },
      {
        title: 'Earl Bowman',
        time: 'Digital Marketer',
        source: 'waino_altenwerth@nicolette',
        image: 'assets/img/image (1).png'
      },
      {
        title: 'Patrick Padilla',
        time: 'Social Media',
        source: 'octavia.nienow@gleichner',
        image: 'assets/img/image (2).png'
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
}
