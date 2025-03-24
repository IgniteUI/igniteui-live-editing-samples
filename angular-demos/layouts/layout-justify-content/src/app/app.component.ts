import { Component } from "@angular/core";
import { LayoutJustifyContentComponent } from "./layout/layout-justify-content/layout-justify-content.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LayoutJustifyContentComponent]
})
export class AppComponent {}