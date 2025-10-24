import { Component } from "@angular/core";
import { HGridRowClassesSampleComponent } from "./hierarchical-grid/hgrid-rowClasses-sample/hgrid-rowClasses.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridRowClassesSampleComponent]
})
export class AppComponent {}