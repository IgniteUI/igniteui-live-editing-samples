import { Component } from "@angular/core";
import { GridRowClassesComponent } from "./grid/grid-rowClasses-sample/grid-rowClasses.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridRowClassesComponent]
})
export class AppComponent {}