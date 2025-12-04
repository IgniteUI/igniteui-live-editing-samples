import { Component } from "@angular/core";
import { GridExternalOutletComponent } from "./grid/grid-external-outlet-sample/grid-external-outlet-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridExternalOutletComponent]
})
export class AppComponent {}