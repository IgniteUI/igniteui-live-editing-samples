import { Component } from "@angular/core";
import { GridMultiColumnHeadersComponent } from "./grid/multi-column-headers/multi-column-headers";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultiColumnHeadersComponent]
})
export class AppComponent {}