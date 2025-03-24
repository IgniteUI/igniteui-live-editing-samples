import { Component } from "@angular/core";
import { GridPagerSampleComponent } from "./grid/grid-pager-sample/grid-pager-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridPagerSampleComponent]
})
export class AppComponent {}