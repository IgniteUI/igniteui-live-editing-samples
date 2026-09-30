import { Component } from "@angular/core";
import { ColorPickerOverviewComponent } from "./overview/color-picker-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ColorPickerOverviewComponent]
})
export class AppComponent {}