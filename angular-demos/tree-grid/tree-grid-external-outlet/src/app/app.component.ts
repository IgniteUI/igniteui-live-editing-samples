import { Component } from "@angular/core";
import { TreeGridExternalOutletComponent } from "./tree-grid-external-outlet/tree-grid-external-outlet-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridExternalOutletComponent]
})
export class AppComponent {}