import { Component } from "@angular/core";
import { GridLiteColumnConfigHeadersComponent } from "./grid-lite/grid-lite-column-config-headers/grid-lite-column-config-headers.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridLiteColumnConfigHeadersComponent]
})
export class AppComponent {}