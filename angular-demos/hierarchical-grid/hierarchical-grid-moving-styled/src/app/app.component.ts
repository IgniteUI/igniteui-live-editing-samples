import { Component } from "@angular/core";
import { HGridColumnMovingSampleStyledComponent } from "./hierarchical-grid/hierarchical-grid-column-moving-styled/hierarchical-grid-moving-styled.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridColumnMovingSampleStyledComponent]
})
export class AppComponent {}