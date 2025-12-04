import { Component } from "@angular/core";
import { LayoutDirectionColumnComponent } from "./layout/layout-direction-column/layout-direction-column.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LayoutDirectionColumnComponent]
})
export class AppComponent {}