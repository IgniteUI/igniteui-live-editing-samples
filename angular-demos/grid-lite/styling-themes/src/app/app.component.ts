import { Component } from "@angular/core";
import { GridLiteStylingThemesComponent } from "./grid-lite/grid-lite-styling-themes/grid-lite-styling-themes.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteStylingThemesComponent]
})
export class AppComponent {}