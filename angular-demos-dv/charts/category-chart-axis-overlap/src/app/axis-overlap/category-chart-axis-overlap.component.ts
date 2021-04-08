import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-axis-overlap",
    styleUrls: ["./category-chart-axis-overlap.component.scss"],
    templateUrl: "./category-chart-axis-overlap.component.html"
})
export class CategoryChartAxisOverlapComponent {
   
    public data: any;
    public AxisOverlapValue : number =1 ;
    
    public OnXAxisOverlapChange(e : any) {        
        this.AxisOverlapValue = e.target.value;
    }   

    constructor() {
        this.data = [
            { Franchise: "Marvel Universe All Films", TotalWorldBoxOfficeRevenue: 22.55, HighestGrossingMovieInSeries: 2.8 },
            { Franchise: "Star Wars", TotalWorldBoxOfficeRevenue: 10.32, HighestGrossingMovieInSeries: 2.07 },
            { Franchise: "Harry Potter", TotalWorldBoxOfficeRevenue: 9.19, HighestGrossingMovieInSeries: 1.34 },
            { Franchise: "Avengers", TotalWorldBoxOfficeRevenue: 7.76, HighestGrossingMovieInSeries: 2.8 },
            { Franchise: "Spider Man", TotalWorldBoxOfficeRevenue: 7.22, HighestGrossingMovieInSeries: 1.28 },
            { Franchise: "James Bond", TotalWorldBoxOfficeRevenue: 7.12, HighestGrossingMovieInSeries: 1.11 }    
        ];
    }
}
