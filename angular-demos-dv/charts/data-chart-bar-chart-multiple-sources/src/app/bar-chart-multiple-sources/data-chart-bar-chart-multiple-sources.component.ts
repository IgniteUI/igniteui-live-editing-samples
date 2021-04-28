import { Component } from "@angular/core";

@Component({
  selector: "app-data-chart-bar-chart-multiple-sources",
  templateUrl: "./data-chart-bar-chart-multiple-sources.component.html",
  styleUrls: ["./data-chart-bar-chart-multiple-sources.component.scss"]
})
export class DataChartBarChartMultipleSourcesComponent {

    public data = [

        {Franchise: "Marvel Universe All Films", TotalWorldBoxOfficeRevenue: 22.55, HighestGrossingMovieInSeries: 2.8 },
        {Franchise: "Star Wars",                 TotalWorldBoxOfficeRevenue: 10.32, HighestGrossingMovieInSeries: 2.07},
        {Franchise: "Harry Potter",              TotalWorldBoxOfficeRevenue: 9.19,  HighestGrossingMovieInSeries: 1.34},
        {Franchise: "Avengers",                  TotalWorldBoxOfficeRevenue: 7.76,  HighestGrossingMovieInSeries: 2.8 },
        {Franchise: "Spider Man",                TotalWorldBoxOfficeRevenue: 7.22,  HighestGrossingMovieInSeries: 1.28},
        {Franchise: "James Bond",                TotalWorldBoxOfficeRevenue: 7.12,  HighestGrossingMovieInSeries: 1.11}
    ];

    constructor() { }
}
