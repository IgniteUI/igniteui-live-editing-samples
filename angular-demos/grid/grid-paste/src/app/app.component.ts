import { Component } from "@angular/core";
import { GridPasteSampleComponent } from "./grid/grid-paste-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridPasteSampleComponent]
})
export class AppComponent {}