import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-app-statistics',
  templateUrl: './app-statistics.component.html',
  styleUrls: ['./app-statistics.component.css']
})
export class AppStatisticsComponent implements OnInit {

  data: any;
  chartOptions: any;
  basicData: any;
  basicOptions: any;

  constructor() {

  }

  ngOnInit(): void {

    this.data = {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      datasets: [
        {
          label: 'Auto',
          data: [0, 0, 0, 10, 10, 10, 10, 87, 87, 87, 87, 87, 87, 120, 166, 166, 210, 210, 210, 210, 288, 288, 288, 312, 312, 312, 312, 312, 312, 312, 312],
          borderColor: '#b8236a',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          cubicInterpolationMode: 'monotone',
          pointRadius:0,
          borderWidth:5
        },
        {
          label: 'Öffentliche',
          data: [7, 14, 21, 21, 30, 30, 37, 37, 60, 60, 60, 60, 60, 60, 71, 71, 83, 83, 83, 83, 83, 99, 99, 99, 99, 99, 106, 106, 106, 110, 110],
          borderColor: '#d17a29',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          cubicInterpolationMode: 'monotone',
          pointRadius:0,
          borderWidth:5
        },
        {
          label: 'Zu Fuß',
          data: [1, 2, 4, 10, 11, 12, 14, 21, 23, 27, 30, 35, 37, 37, 40, 41, 44, 50, 60, 62, 69, 74, 77, 80, 86, 92, 93, 96, 100, 101, 102],
          borderColor: '#2592b5',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          cubicInterpolationMode: 'monotone',
          pointRadius:0,
          borderWidth:5
        }
      ]
    }
    this.chartOptions = {
      legend: {position: 'bottom'},
      title: {
        display: true,
        text: 'Hinterlegte Kilometer pro Transportmittel'
      },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          }
        }],
        yAxes: [{
          gridLines: {
            display:false
          }
        }]
      }
    }

    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Score',
          backgroundColor: '#1c80cf',
          data: [5800, 4650, 11000, 9900, 7680]
        }
      ]
    };

    this.basicOptions = {
      legend: {position: 'bottom'},
      title: {
        display: true,
        text: 'Monatliche Punktzahlen'
      },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          }
        }],
        yAxes: [{
          gridLines: {
            display:false
          }
        }]
      }
    }

  }

}
