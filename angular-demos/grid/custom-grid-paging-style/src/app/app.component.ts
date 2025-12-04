import { Component } from "@angular/core";
import { CustomGridPagingStyleSampleComponent } from "./grid/custom-grid-paging-style/custom-grid-paging-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CustomGridPagingStyleSampleComponent]
})
export class AppComponent {}