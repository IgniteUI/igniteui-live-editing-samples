import { Component } from "@angular/core";
import { GridColumnHidingToolbarStyleComponent } from "./grid/grid-column-hiding-toolbar-style/grid-column-hiding-toolbar-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridColumnHidingToolbarStyleComponent]
})
export class AppComponent {}