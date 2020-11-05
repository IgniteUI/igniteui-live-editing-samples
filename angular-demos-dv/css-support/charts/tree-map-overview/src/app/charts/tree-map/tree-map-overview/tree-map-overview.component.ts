// tslint:disable:max-line-length
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxTreemapComponent } from "igniteui-angular-charts";
import { TreemapFillScaleMode } from "igniteui-angular-charts";
import { TreemapLayoutType } from "igniteui-angular-charts";
import { TreemapOrientation } from "igniteui-angular-charts";
import { WorldHierarchicalData } from "../WorldHierarchicalData";

@Component({
    providers: [ WorldHierarchicalData ],
    selector: "app-treemap-overview",
    styleUrls: ["./tree-map-overview.component.css"],
    templateUrl: "./tree-map-overview.component.html"
})
export class TreeMapOverviewComponent implements AfterViewInit {

    @ViewChild("treeMap", { static: true })
    public treeMap: IgxTreemapComponent = null;
    
    public ngAfterViewInit(): void {
        this.treeMap.dataSource = WorldHierarchicalData.getPopulation();
        this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
        this.treeMap.fillScaleMinimumValue = 0;
        this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
        this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
        this.treeMap.isFillScaleLogarithmic = false;
        this.onClickSquared();
    }

    public onClickSquared(): void {
        this.treeMap.layoutType = TreemapLayoutType.Squarified;
    }

    public onClickSliceVer(): void {
        this.treeMap.layoutType = TreemapLayoutType.SliceAndDice;
        this.treeMap.layoutOrientation = TreemapOrientation.Vertical;
    }
    public onClickSliceHor(): void {
        this.treeMap.layoutType = TreemapLayoutType.SliceAndDice;
        this.treeMap.layoutOrientation = TreemapOrientation.Horizontal;
    }

    public onClickStripVer(): void {
        this.treeMap.layoutType = TreemapLayoutType.Stripped;
        this.treeMap.layoutOrientation = TreemapOrientation.Vertical;
    }
    public onClickStripHor(): void {
        this.treeMap.layoutType = TreemapLayoutType.Stripped;
        this.treeMap.layoutOrientation = TreemapOrientation.Horizontal;
    }

}
