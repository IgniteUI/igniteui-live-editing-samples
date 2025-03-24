import { Component } from "@angular/core";
import { GridSelectComponent } from "./grid/grid-select/grid-select-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridSelectComponent]
})
export class AppComponent {}