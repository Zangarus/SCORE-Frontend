import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-statistics',
  templateUrl: './app-statistics.component.html',
  styleUrls: ['./app-statistics.component.css'],
})
export class AppStatisticsComponent implements OnInit {
  data: any;
  chartOptions: any;
  basicData: any;
  basicOptions: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginToken();
    this.data = {
      labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
      ],
      datasets: [
        {
          label: 'Auto',
          data: [
            0,
            0,
            0,
            10,
            10,
            10,
            10,
            87,
            87,
            87,
            87,
            87,
            87,
            120,
            166,
            166,
            210,
            210,
            210,
            210,
            288,
            288,
            288,
            312,
            312,
            312,
            312,
            312,
            312,
            312,
            312,
          ],
          borderColor: '#2a602c',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          cubicInterpolationMode: 'monotone',
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: 'Öffentliche',
          data: [
            7,
            14,
            21,
            21,
            30,
            30,
            37,
            37,
            60,
            60,
            60,
            60,
            60,
            60,
            71,
            71,
            83,
            83,
            83,
            83,
            83,
            99,
            99,
            99,
            99,
            99,
            106,
            106,
            106,
            110,
            110,
          ],
          borderColor: '#4caf50',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          cubicInterpolationMode: 'monotone',
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: 'Zu Fuß',
          data: [
            1,
            2,
            4,
            10,
            11,
            12,
            14,
            21,
            23,
            27,
            30,
            35,
            37,
            37,
            40,
            41,
            44,
            50,
            60,
            62,
            69,
            74,
            77,
            80,
            86,
            92,
            93,
            96,
            100,
            101,
            102,
          ],
          borderColor: '#90cd93',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          cubicInterpolationMode: 'monotone',
          pointRadius: 0,
          borderWidth: 2,
        },
      ],
    };
    this.chartOptions = {
      color:"white",
      legend: { 
        position: 'bottom',
        labels: {
              fontColor: 'white'
          }
      },
      title: {
        display: true,
        text: 'Hinterlegte Kilometer pro Transportmittel',
        fontColor:"white"
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor:"white"
            }
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor:"white"
            }
          },
        ],
      },
    };

    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Score',
          backgroundColor: '#4caf50',
          data: [5800, 4650, 11000, 9900, 7680],
        },
      ],
    };

    this.basicOptions = {
      legend: { 
        position: 'bottom',
        labels: {
          fontColor: 'white'
        }
      },
      title: {
        display: true,
        text: 'Monatliche Punktzahlen',
        fontColor:"white"
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor:"white"
            }
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor:"white"
            }
          },
        ],
      },
    };
  }

  private checkLoginToken(): void {
    if (localStorage.getItem('token')) {
      console.log('Token available');
      return;
    } else {
      this.router.navigate(['/welcome']);
    }
  }
}
