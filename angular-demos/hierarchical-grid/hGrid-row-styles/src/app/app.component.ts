import { Component } from "@angular/core";
import { HGridRowStylesSampleComponent } from "./hierarchical-grid/hgrid-rowStyle-sample/hgrid-rowStyles.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridRowStylesSampleComponent]
})
export class AppComponent {}