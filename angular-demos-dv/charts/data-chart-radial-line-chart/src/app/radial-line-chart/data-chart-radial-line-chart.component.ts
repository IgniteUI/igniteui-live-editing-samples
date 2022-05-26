import { Component } from "@angular/core";

@Component({
    selector: "app-data-chart-radial-line-chart",
    templateUrl: "./data-chart-radial-line-chart.component.html",
    styleUrls: ["./data-chart-radial-line-chart.component.scss"]
})
export class DataChartRadialLineChartComponent {

    public data: any[];

    constructor() {
        this.initData();
    }

public initData(){
    
    this.data = [       
        { Attribute : "Dribbling",  RonaldoValue : 8,  MessiValue : 10 },
        { Attribute : "Passing",    RonaldoValue : 8,  MessiValue : 10 },
        { Attribute : "Finishing",  RonaldoValue : 10, MessiValue : 10 },
        { Attribute : "Free Kicks", RonaldoValue : 8,  MessiValue : 9 },
        { Attribute : "Penalties",  RonaldoValue : 9,  MessiValue : 7 },
        { Attribute : "Physical",   RonaldoValue : 10, MessiValue : 7 },
        { Attribute : "Team Play",  RonaldoValue : 7,  MessiValue : 9 },
        { Attribute : "Heading",    RonaldoValue : 9,  MessiValue : 6 },
    ];
}
}
