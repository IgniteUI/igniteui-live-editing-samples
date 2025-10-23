import { Component } from "@angular/core";
import { GridMasterDetailSampleComponent } from "./grid/grid-master-detail/grid-master-detail.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMasterDetailSampleComponent]
})
export class AppComponent {}