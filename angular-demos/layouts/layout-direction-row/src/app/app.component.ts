import { Component } from "@angular/core";
import { LayoutDirectionRowComponent } from "./layout/layout-direction-row/layout-direction-row.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LayoutDirectionRowComponent]
})
export class AppComponent {}