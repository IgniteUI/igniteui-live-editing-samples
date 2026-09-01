import { Component } from "@angular/core";
import { GridThemingComponent } from "./grid/grid-theming/grid-theming.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridThemingComponent]
})
export class AppComponent {}