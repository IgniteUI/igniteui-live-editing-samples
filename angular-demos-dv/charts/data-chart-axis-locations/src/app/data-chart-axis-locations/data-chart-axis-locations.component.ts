import { Component, OnInit } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxLegendComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";

@Component({
  selector: "app-data-chart-axis-locations",
  styleUrls: ["./data-chart-axis-locations.component.scss"],
  templateUrl: "./data-chart-axis-locations.component.html"
})
export class DataChartAxisLocationsComponent implements OnInit {

  public data: any[];

  constructor() {
    this.initData();
  }

  public ngOnInit() {
  }

  public initData() {
    const items: any[] = [];
    const months: string[] = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];

    let revenue = 200;
    let profit = 15;
    let expanse = 0;

    let year = 2020;
    let month = 0;
    for (let i = 0; i < 25; i++) {
        revenue += Math.random() * 50 - 20;
        profit += Math.random() * 4.0 - 2.0; // percentage
        expanse = revenue - (revenue * profit / 100);
        items.push(
            {
                Expanse: Math.round(-expanse),
                Month:  months[month],
                Profit: Math.round(profit),
                Revenue: Math.round(revenue),
                Year: year
        });
        month += 1;
        if (month >= 12) {
            month = 0;
            year += 1;
        }
    }

    this.data = items;
}

}
