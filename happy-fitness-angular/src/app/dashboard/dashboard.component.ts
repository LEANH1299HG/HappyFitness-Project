import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../variables/charts";
// import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // public datasets: any;
  // public data: any;
  // public salesChart;
  // public clicked: boolean = true;
  // public clicked1: boolean = false;
  // public userup = false;
  // public orderup = true;
  // public revueneup = true;
  // public totalUser = '30';
  // public percentUser: any;
  // public totalRevuene = '15,600,000';
  // public percentRevuene = '15';
  // public totalOrder = '35';
  // public percentOrder = '10';
  // public ratingAverage = '4,5';
  // public totalRating = '4';
  // startDate = "2023-08-01";
  // sumary: any;
  // months: any;
  // x: string[];
  // sortedData: any;
  // previousMonth: string;

  // constructor(
  //   // private bookingServicee: BookingService,
  // ) { }

  // ngOnInit() {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
