import { Component } from '@angular/core';

@Component({
  selector: 'app-data-chart-axis-crossing',
  templateUrl: './data-chart-axis-crossing.component.html',
  styleUrls: ['./data-chart-axis-crossing.component.scss']
})
export class DataChartAxisCrossingComponent {

    public SinData: any[];
    public CosData: any[];

    public YAxisCrossingValue : number = 0;
    public XAxisCrossingValue : number = 0;

    constructor() {

      this.SinData= [];
      this.CosData= [];

        for (let i = -360; i <= 360; i+=10)
        {
            const radians = (i * Math.PI) / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);

            this.SinData.push( { X : i, Y : sin });
            this.CosData.push( { X : i, Y : cos });
        }
    }

    public OnXAxisCrossingValueChanged(e : any) {
        this.XAxisCrossingValue = e.target.value;
    }

    public OnYAxisCrossingValueChanged(e : any) {
        this.YAxisCrossingValue = e.target.value;
    }
}
