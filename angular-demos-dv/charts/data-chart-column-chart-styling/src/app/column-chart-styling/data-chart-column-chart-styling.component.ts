import { Component, OnInit } from '@angular/core';
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from 'igniteui-angular-core';

@Component({
  selector: 'app-data-chart-column-chart-styling',
  templateUrl: './data-chart-column-chart-styling.component.html',
  styleUrls: ['./data-chart-column-chart-styling.component.scss']
})
export class DataChartColumnChartStylingComponent implements OnInit{

    public data: any[];

    constructor() {
    }

    public ngOnInit() {
        this.data = [
            { Location: "World", Solar: 23, Coal: -1, Hydropower: 1, Wind: 12, Nuclear: 3 },
            { Location: "China", Solar: 26, Coal: 2, Hydropower: 5, Wind: 10, Nuclear: 18 },
            { Location: "U.S.", Solar: 15, Coal: -15, Hydropower: -7, Wind: 10, Nuclear: 1 },
            { Location: "EU", Solar: 11, Coal: -12, Hydropower: -2, Wind: 14, Nuclear: -1 }
        ];
    }

    public getMarker() : any {
        let style = { outline: "#8B5BB1", fill: "white", text: "black" };
        const size = 12;

        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const data = measureInfo.data;
                const context = measureInfo.context;
                let value = "0.00";
                let item = data.item;
                if (item != null) {
                    value = item.Solar.toString();
                }
                const height = context.measureText("M").width;
                const width = context.measureText(value).width;
                measureInfo.width = width;
                measureInfo.height = height + size;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                const item = renderInfo.data.item;
                const series = renderInfo.data.series;

                const valuePath = series.valueColumn.propertyName;

                var value = 0;

                switch (valuePath) {
                    case "Solar":
                        value = item.Solar;
                        break;
                    case "Coal":
                        value = item.Coal;
                        break;
                    case "Hydropower":
                        value = item.Hydropower;
                        break;
                    case "Wind":
                        value = item.Wind;
                        break;
                    case "Nuclear":
                        value = item.Nuclear;
                        break;
                }

                const ctx = renderInfo.context;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;

                    let width = renderInfo.availableWidth;
                    let height = renderInfo.availableHeight;

                    ctx.fillRect(x - (width / 2), y - (height), renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                }

                let xOffset = 20;
                let yOffset = 10;

                ctx.font = '8pt Verdana';
                ctx.textBaseline = 'top';
                ctx.fillStyle = style.text;

                if (value < 0) {
                    ctx.fillText(value + "%", x - (xOffset / 2), y + (yOffset ));
                }
                else {
                    ctx.fillText(value + "%", x - (xOffset / 2), y - (yOffset * 2));
                }
            }
        }
    }
}
