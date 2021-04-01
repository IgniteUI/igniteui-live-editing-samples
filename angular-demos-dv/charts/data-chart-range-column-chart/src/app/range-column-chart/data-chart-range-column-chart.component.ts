import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-chart-range-column-chart',
    templateUrl: './data-chart-range-column-chart.component.html',
    styleUrls: ['./data-chart-range-column-chart.component.scss']
})
export class DataChartRangeColumnChartComponent implements OnInit {

    public data: any[];

    constructor() { }

    ngOnInit(): void {
        this.data = [
            { Month: "January", NY_High: 10.6, NY_Low: -6.6, LA_High: 28.3, LA_Low: 7.8 },
            { Month: "February", NY_High: 7.8, NY_Low: -9.9, LA_High: 31.1, LA_Low: 5.6 },
            { Month: "March", NY_High: 12.2, NY_Low: -3.8, LA_High: 27.8, LA_Low: 8.3 },
            { Month: "April", NY_High: 11.7, NY_Low: 2.2, LA_High: 33.9, LA_Low: 10.6 },
            { Month: "May", NY_High: 19.4, NY_Low: 1.1, LA_High: 35.0, LA_Low: 13.9 },
            { Month: "June", NY_High: 23.3, NY_Low: 10.6, LA_High: 36.7, LA_Low: 16.1 },
            { Month: "July", NY_High: 27.2, NY_Low: 19.4, LA_High: 33.3, LA_Low: 15.6 },
            { Month: "August", NY_High: 25.6, NY_Low: 16.7, LA_High: 36.7, LA_Low: 15.6 },
            { Month: "September", NY_High: 22.8, NY_Low: 8.9, LA_High: 43.9, LA_Low: 16.1 },
            { Month: "October", NY_High: 17.8, NY_Low: 0.0, LA_High: 38.3, LA_Low: 11.1 },
            { Month: "November", NY_High: 17.8, NY_Low: -1, LA_High: 32.8, LA_Low: 6.7 },
            { Month: "December", NY_High: 8.3, NY_Low: -6.6, LA_High: 28.9, LA_Low: 5.6 }
        ];
    }
}
