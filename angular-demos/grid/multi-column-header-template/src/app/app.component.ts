import { Component } from "@angular/core";
import { GridMultiColumnHeaderTemplateComponent } from "./grid/multi-column-header-template/multi-column-header-template";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMultiColumnHeaderTemplateComponent]
})
export class AppComponent {}