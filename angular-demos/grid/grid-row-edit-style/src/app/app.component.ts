import { Component } from "@angular/core";
import { GridRowEditStyleComponent } from "./grid/grid-row-editing-style/grid-row-editing-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridRowEditStyleComponent]
})
export class AppComponent {}