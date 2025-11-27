import { Component } from "@angular/core";
import { GridLiteStylingCustomComponent } from "./grid-lite/grid-lite-styling-custom/grid-lite-styling-custom.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteStylingCustomComponent]
})
export class AppComponent {}