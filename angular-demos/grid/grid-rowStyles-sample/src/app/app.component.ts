import { Component } from "@angular/core";
import { GridRowStylesComponent } from "./grid/grid-rowStyles-sample/grid-rowStyles.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridRowStylesComponent]
})
export class AppComponent {}