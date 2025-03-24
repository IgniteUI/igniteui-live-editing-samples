import { Component } from "@angular/core";
import { GridToolbarStyleComponent } from "./grid/grid-toolbar-style/grid-toolbar-style.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridToolbarStyleComponent]
})
export class AppComponent {}